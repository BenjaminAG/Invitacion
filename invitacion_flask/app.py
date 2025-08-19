
from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

# Set your event datetime (local MX time). Render runs UTC, but we only render text; JS does the live countdown on client.
EVENT_DATETIME_ISO = "2025-09-27T16:15:00"  # 27 Sept 2025, 4:15 PM

@app.route("/")
def home():
    return render_template("index.html")
def index():
    return render_template(
        "index.html",
        festejado="ANGEL URIEL",
        fecha_evento="27 de Septiembre",
        misa_hora="4:15 pm",
        evento_iso=EVENT_DATETIME_ISO
    )

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
