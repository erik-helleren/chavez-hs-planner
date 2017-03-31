from django.core.management import BaseCommand
import sys,os
from student.models import Grade
import csv
from django.db import connection


#LOCATION OF YOUR DJANGO PROJECTS
sys.path.append('Users/administrator/Desktop/django-ontrack')
os.environ['DJANGO_SETTINGS_MODULE']= 'settings'

#make sure csv is saved as a Windows csv. the default on Mac will not work
gradesCSV = "/Users/administrator/Desktop/django-ontrack/ontrack/ontrack/student-data/student-grades-sample2.csv"
#grades_file = csv.reader(open(), dialect='excel', delimiter=',')


#The class must be named Command, and subclass BaseCommand
class Command(BaseCommand):
    # Show this when the user types help
    help = "Populates the Grades DB with CSV file. CSV file should be saved as a Windows CSV"

    # A command must define handle()
    def handle(self, *args, **options):

        col_types = [str, str, int, str]
        with open(gradesCSV) as f:
            f_csv = csv.reader(f)
            headers = next(f_csv)
            for row in f_csv:
                # Apply conversions to the row items
                row = tuple(convert(value) for convert, value in zip(col_types, row))
                student_id = row[0]
                subject_name = row[1]
                grade=row[2]
                grade_date=row[3]
                Grade.objects.get_or_create(grade=grade, subject=subject_name, student_id=student_id, grade_date=grade_date)

        self.stdout.write("Done Loading Grades")
