from rest_framework import serializers
from .models import Customer, CustomerAddress, ContactPerson

class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerAddress
        fields = '__all__'
        read_only_fields = ('customer',)

class ContactPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactPerson
        fields = '__all__'
        read_only_fields = ('customer',)

class CustomerSerializer(serializers.ModelSerializer):
    addresses = CustomerAddressSerializer(many=True, required=False)
    contact_persons = ContactPersonSerializer(many=True, required=False)

    class Meta:
        model = Customer
        fields = '__all__'

    def create(self, validated_data):
        addresses_data = validated_data.pop('addresses', [])
        contact_persons_data = validated_data.pop('contact_persons', [])
        
        customer = Customer.objects.create(**validated_data)
        
        for address_data in addresses_data:
            CustomerAddress.objects.create(customer=customer, **address_data)
            
        for contact_person_data in contact_persons_data:
            ContactPerson.objects.create(customer=customer, **contact_person_data)
            
        return customer

    def update(self, instance, validated_data):
        addresses_data = validated_data.pop('addresses', None)
        contact_persons_data = validated_data.pop('contact_persons', None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        # Update addresses
        if addresses_data is not None:
            instance.addresses.all().delete()
            for address_data in addresses_data:
                CustomerAddress.objects.create(customer=instance, **address_data)

        # Update contact persons
        if contact_persons_data is not None:
            instance.contact_persons.all().delete()
            for contact_person_data in contact_persons_data:
                ContactPerson.objects.create(customer=instance, **contact_person_data)

        return instance
