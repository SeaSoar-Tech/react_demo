
import string
import sys

try:
    input = sys.argv
    if len(input) != 2:
        raise ValueError("input number is not right")
    num = int(input[1])
    print("num is ", num)
except Exception as e:
    print("exception is ", e)
    
    
# 后面这里还是会执行的
print(string.ascii_lowercase)
