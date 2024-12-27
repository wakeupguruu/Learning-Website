import pandas as pd
import os
import django

# Set up Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "clg.settings")  
django.setup()

from api.models import Question  

def bulk_upload(file_path):
    # Read the Excel file
    try:
        data = pd.read_excel(file_path)
        data.columns = data.columns.str.strip().str.replace('\xa0', '')
    except Exception as e:
        print(f"Error reading Excel file: {e}")
        return
    
    print("Cleaned Columns:", data.columns.tolist())
    
    # Iterate over rows and prepare data for bulk creation
    questions = []
    for index , row in data.iterrows():
        questions.append(Question(
            title=row["title"],
            topic=row["topic"],
            question_discription=row.get("question_discription"),
            difficulty_level=row["difficulty_level"],
            code_solution=row.get("code_solution"),
            video_solution_url=row.get("video_solution_url"),
            pseudocode_url=row.get("pseudocode_url"),
            practice_url=row.get("practice_url")
        ))
    
    # Bulk create questions in the database
    try:
        Question.objects.bulk_create(questions)
        print(f"Successfully added {len(questions)} questions to the database.")
    except Exception as e:
        print(f"Error during bulk creation: {e}")

if __name__ == "__main__":
    # Replace 'your_file.xlsx' with the path to your Excel file
    bulk_upload( r"C:\Users\vyasg\OneDrive\Documents\question.xlsx")
