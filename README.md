# Django + Next.JS Template

**Django + NextJS** is a simple tempalte to help you get started on your web dev project. The template incudes Django for the backend and Next.JS for the frontend. The frontend also supports TailwindCSS so your don't need to worry about making custom style sheets.

## ✨ Features
- A simple Django + NextJS template to get you started on your web dev projects.
## 🛠 Tech Stack
- **Django** - API and DB Integration
- **TypeScript** – Static typing for safer, scalable code
- **Tailwind CSS** – Utility-first styling

## Getting Started

1. Pull down the template to a local location on your computer
2. Open a terminal and go to the root of the project.
3. Create a Python Virtual Environment.
```
# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
```
4. Install Python dependencies.
```
# Install Django and DRF
pip install django djangorestframework
pip install django-cors-headers
```
5. Run Django Migrations.
```
python manage.py makemigrations api
python manage.py migrate
```
6. Run the backend server by doing the following.
```
python manage.py runserver
```
The server will be accessible by going to https://localhost/8000/api/reviews.
7. Open a new terminal and change directory to the frontend folder.
8. Install all NodeJS dependencies.
```
npm install
```
9. Run the Development server for the frontend.
```
npm run dev
```
The server will be accessible by going to https://localhost/3000.