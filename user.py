import http.client
import urllib.parse
import msvcrt as visual_cpp

conn = http.client.HTTPConnection("127.0.0.1")

key_mapping = {"w": "forward", "a": "left", "s": "backward", "d": "right"}

while True:
    char = visual_cpp.getch().decode()
    
    params = urllib.parse.urlencode({"movement": key_mapping[char]})

    conn.request("POST", "/movement", params)

    conn.getresponse()
