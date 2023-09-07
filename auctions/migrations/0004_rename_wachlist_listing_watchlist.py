

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0003_listing_wachlist'),
    ]

    operations = [
        migrations.RenameField(
            model_name='listing',
            old_name='wachlist',
            new_name='watchlist',
        ),
    ]
