from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

INSTAGRAM_ACCESS_TOKEN = os.getenv('INSTAGRAM_ACCESS_TOKEN')
INSTAGRAM_USER_ID = os.getenv('INSTAGRAM_USER_ID')

class Testimonial(BaseModel):
    client_name: str
    content: str
    rating: int

# Store testimonials (in a real app, use a database)
testimonials = [
    {
        "client_name": "Sarah Johnson",
        "content": "Anna's work exceeded my expectations. Her attention to detail is remarkable!",
        "rating": 5
    },
    {
        "client_name": "Michael Chen",
        "content": "Professional, creative, and delivers on time. Highly recommended!",
        "rating": 5
    }
]

@app.get("/api/testimonials")
async def get_testimonials():
    return testimonials

@app.get("/api/instagram-feed")
async def get_instagram_feed():
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"https://graph.instagram.com/{INSTAGRAM_USER_ID}/media"
                f"?fields=id,caption,media_type,media_url,permalink,thumbnail_url"
                f"&access_token={INSTAGRAM_ACCESS_TOKEN}"
            )
            return response.json()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 