from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

# Fecha y hora del evento (hora local MX)
EVENT_DATETIME_ISO = "2025-09-27T16:15:00"  # 27 Sept 2025, 4:15 PM

@app.route("/")
def index():
    return render_template(
        "index.html",
        festejado="ANGEL URIEL",
        fecha_evento="27 de Septiembre",
        misa_hora="4:15 pm",
        evento_iso=EVENT_DATETIME_ISO
    )

# Solo se ejecuta con 'python app.py' (desarrollo local)
if __name__ == "__main__":
    # Debug=True opcional para desarrollo local
    app.run(host="0.0.0.0", port=5000, debug=True)
