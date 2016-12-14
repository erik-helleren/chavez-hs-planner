from django.core.management import BaseCommand
import sys,os
from student.models import Student, Roster
import csv
from django.db import connection
import pandas
from datetime import datetime


#LOCATION OF YOUR DJANGO PROJECTS
sys.path.append('Users/administrator/Desktop/django-ontrack')
os.environ['DJANGO_SETTINGS_MODULE']= 'settings'

#get from SIM
simXLS = "/Users/administrator/Desktop/django-ontrack/ontrack/ontrack/student-data/SIM-10-21-16.xls"


#The class must be named Command, and subclass BaseCommand
class Command(BaseCommand):
    # Show this when the user types help
    help = "Populates the Student Table with CPS' SIM XLS"

    # A command must define handle()
    def handle(self, *args, **options):
        df = pandas.read_excel(open(simXLS,'rb'), header=5, skip_footer=2)
        df = df.dropna(axis=['index', 'columns'], how='all')

        #for testing only
        fifth_df=df.loc[df['Gr(A)'] == '5']
        num_fifth=len(fifth_df)
        df=df

        for i in range(0,len(df)):
            user=Student.objects.get_or_create(student_id=df.iloc[i]['ID'].astype(int))
            #in the SIM report, some student's first and last names are separated with " , " instead of ", "
            user[0].first_name=df.iloc[i]['Student Name (LFM)'].replace(" , ", ", ").split()[1]
            user[0].last_name=df.iloc[i]['Student Name (LFM)'].replace(" , ", ", ").split()[0].rstrip(',')
            user[0].gender=df.iloc[i]['Gender']
            user[0].birthdate=datetime.strptime(df.iloc[i]['Birth Date'], '%b %d, %Y')
            user[0].save()




        self.stdout.write("Done Loading Student SIM File into Student and Roster Model")
