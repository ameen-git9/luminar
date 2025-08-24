# pip install mysql-connector  -> package

import mysql.connector
conn=mysql.connector.connect(host="localhost",user="root",password="",database="ameen")
print("connected")
cur=conn.cursor()
# cur.execute("show databases")
# for i in cur:
#     print(i) # result in tuple ->('ameen',)
                # ('information_schema',)
                # ('mysql',)
                # ('performance_schema',)
                # ('phpmyadmin',)
                # ('test',)
# print(cur.fetchall())    #[('ameen',), ('information_schema',), ('mysql',), ('performance_schema',), ('phpmyadmin',), ('test',)]

# print(cur.fetchone())     #('ameen',)

# print(cur.fetchmany(3))    # [('ameen',), ('information_schema',), ('mysql',)]

# cur.execute("show tables")
# print(cur.fetchall())    #[('customer',), ('employee',), ('employee1',), ('orders',), ('salesman',), ('student',)] tuple aayt print cheyyum

# cur.execute("create table foot(id int,name varchar(20))")      (#  cur.execute(create table)is used to create database table structure.)
# cur.execute("show tables")                                  
# print(cur.fetchall())
# cur.execute("insert into foot values(1,'ameen'),(2,'fahiz')")
# cur.execute("insert into foot values(%s,%s)",(2,'fahiz'))  #  %s string formatting
# values=[(4,'ameer'),(5,'srijin')]
# cur.executemany("insert into foot values (%s,%s)",values)
# cur.execute("update foot set name='anandhu' where id=2")

# conn.commit()  #...
# cur.execute("select * from foot")
# print(cur.fetchall())

# conn.close()