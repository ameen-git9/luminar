import json
f=open("posts.json","r")
# # print(f.read())
data=json.load(f)
# print(data)
# print(type(data))

# for i in data:
#     if i ["postID"]==1:
#         print(i)


# post=[i for i in data if i["postID"]==1]
# print(post)
# ----------------------------------------------------
# count=0
# for i in data:
#     if  i["userID"]==1:
#         count+=1
# print(count)

# count=[i for i in data if i["userID"]==1]
# print(len(count))
# o/p = 2
# -------------------------------------------------------

like=[len(i["liked_by"]) for i in data if i["postID"]==3]
print(like)

