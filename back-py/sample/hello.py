from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello world!</p>"


@app.route("/foo/")
def foo():
    return "<p>foo</p>"


if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)
