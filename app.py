from flask import Flask, render_template
from flask_frozen import Freezer

app = Flask(__name__)
app.config['FREEZER_DESTINATION'] = 'docs'
app.config['FREEZER_BASE_URL'] = 'https://fllleshka.github.io/'

freezer = Freezer(app)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    freezer.freeze()