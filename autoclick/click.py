import pyautogui
import threading
import keyboard
import time

# Set the default click interval (seconds)
click_interval = 0.000001
clicking = False

def clicker():
    global clicking
    while clicking:
        pyautogui.click()
        time.sleep(click_interval)

def start_clicking():
    global clicking
    if not clicking:
        clicking = True
        threading.Thread(target=clicker, daemon=True).start()

def stop_clicking():
    global clicking
    clicking = False

# Assign hotkeys
keyboard.add_hotkey("F6", start_clicking)
keyboard.add_hotkey("F7", stop_clicking)
keyboard.add_hotkey("Esc", lambda: exit(0))  # Press ESC to exit the program

print("AutoClicker Started!")
print("Press F6 to Start Clicking")
print("Press F7 to Stop Clicking")
print("Press ESC to Exit")

# Keep the script running
keyboard.wait()
