from django.db import models

class Customer(models.Model):
    CUSTOMER_TYPE_CHOICES = (
        ('Business', 'Business'),
        ('Individual', 'Individual'),
    )

    customer_type = models.CharField(max_length=20, choices=CUSTOMER_TYPE_CHOICES, default='Business')
    primary_contact_salutation = models.CharField(max_length=10, blank=True, null=True)
    primary_contact_first_name = models.CharField(max_length=100)
    primary_contact_last_name = models.CharField(max_length=100, blank=True, null=True)
    display_name = models.CharField(max_length=200)
    customer_language = models.CharField(max_length=50, blank=True, null=True)
    primary_number = models.CharField(max_length=50)
    secondary_number = models.CharField(max_length=50, blank=True, null=True)
    msme = models.CharField(max_length=100, blank=True, null=True)
    company_name = models.CharField(max_length=200, blank=True, null=True)
    email_address = models.EmailField(blank=True, null=True)
    
    # Other Details
    sales_region = models.CharField(max_length=100, blank=True, null=True)
    pan = models.CharField(max_length=50, blank=True, null=True)
    gstin = models.CharField(max_length=50, blank=True, null=True)
    currency = models.CharField(max_length=20, blank=True, null=True)
    opening_balance = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    payment_terms = models.CharField(max_length=100, blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.display_name

class CustomerAddress(models.Model):
    ADDRESS_TYPE_CHOICES = (
        ('Billing', 'Billing'),
        ('Shipping', 'Shipping'),
    )

    customer = models.ForeignKey(Customer, related_name='addresses', on_delete=models.CASCADE)
    address_type = models.CharField(max_length=20, choices=ADDRESS_TYPE_CHOICES)
    attention = models.CharField(max_length=200, blank=True, null=True)
    country_region = models.CharField(max_length=100, blank=True, null=True)
    address_line_1 = models.TextField(blank=True, null=True)
    address_line_2 = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    zip_code = models.CharField(max_length=20, blank=True, null=True)
    phone = models.CharField(max_length=50, blank=True, null=True)
    fax = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"{self.customer.display_name} - {self.address_type}"

class ContactPerson(models.Model):
    customer = models.ForeignKey(Customer, related_name='contact_persons', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    email_address = models.EmailField(blank=True, null=True)
    mobile_number = models.CharField(max_length=50, blank=True, null=True)
    designation = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name
