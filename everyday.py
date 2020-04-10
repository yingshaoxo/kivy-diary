import everyday_pb2
oneday = everyday_pb2.OneDay()

oneday.date = "4.10"

content = oneday.Content()
content.text = "hi"
oneday.content.extend([content])

content = oneday.content.add()
content.image = b"hello"

print(oneday)
for i in oneday.content:
    if i.text:
        print("the text value: ", i.text)
    elif i.image:
        print("the image value: ", i.image)

print()
print('-'*20)
print()

saved_string = oneday.SerializeToString()
print(saved_string)
print(type(saved_string))
print()
oneday = everyday_pb2.OneDay()
oneday.MergeFromString(saved_string)
print(oneday)

print()
print('-'*20)
print()

everyday = everyday_pb2.EveryDay()
everyday.oneday.extend([oneday])
print(everyday.oneday[-1])
#print(everyday)
