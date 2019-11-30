import pandas as pd
import numpy as np

df = pd.read_csv("data/UC_Dataset_for_code.csv",index_col = ['u_id','d_id','d_v'])

def main_process(gpa=0, actE=0, actC=0, satW=0, satM=0, satE=0, agc=0, hc=0):

    n_uni = 9
    gpa = float(gpa)
    actE = float(actE)
    actC = float(actC)
    satW = float(satW)
    satE = float(satE)
    satM = float(satM)
    agc = float(agc)
    hc = float(hc)

    if gpa>=4: gpa = 4.0
    elif gpa<4 and gpa>=3.7: gpa = 3.7
    elif gpa<3.7 and gpa>=3.3: gpa = 3.3
    elif gpa<3.3 and gpa>=3.0: gpa = 3.0
    elif gpa<3.0 and gpa>=0: gpa = 0

    if actE>=31: satE = 31
    elif actE<31 and actE>=26: satE = 26
    elif actE<26 and actE>=21: satE = 21
    elif actE<21 and actE>=16: satE = 16
    elif actE<16 and actE>=0: satE = 0

    if actC>=31: actC = 31
    elif actC<31 and actC>=26: actC = 26
    elif actC<26 and actC>=21: actC = 21
    elif actC<21 and actC>=16: actC = 16
    elif actC<16 and actC>=0: actC = 0

    if satW>=700: satW = 700
    elif satW<700 and satW>=600: satW = 600
    elif satW<600 and satW>=500: satW = 500
    elif satW<500 and satW>=400: satW = 400
    elif satW<400 and satW>=0: satW = 0

    if satM>=700: satM = 700
    elif satM<700 and satM>=600: satM = 600
    elif satM<600 and satM>=500: satM = 500
    elif satM<500 and satM>=400: satM = 400
    elif satM<400 and satM>=0: satM = 0

    if satE>=20: satE = 20
    elif satE<20 and satE>=15: satE = 15
    elif satE<15 and satE>=10: satE = 10
    elif satE<10 and satE>=0: satE = 0

    if agc>=50: agc = 50
    elif agc<50 and agc>=40: agc = 40
    elif agc<40 and agc>=30: agc = 30
    elif agc<30 and agc>=0: agc = 0
        
    if hc>=15: hc = 15
    elif hc<15 and hc>=10: hc = 10
    elif hc<10 and hc>=5: hc = 5
    elif hc<5 and hc>=0: hc = 0

    a = [gpa,actE,actC,satW,satM, satE, agc, hc]
    b = np.empty([n_uni, len(a)])
    c = np.empty(n_uni)
    res= "{"
    #iterating through the loop
    #extracting percentages of
    #each and every university
    #based on given input

    for i in range(0,n_uni):
        uni_res = 0
        for j in range (0,len(a)):
            b[i][j] = (df.loc[i+1,j+1,a[j]]['per'])*100

            if j == 0 : uni_res = uni_res + (b[i][j])*2 #GPA, weight 2
            elif j == 1: uni_res = uni_res + (b[i][j])*0.5 #actE, weight 0.5
            elif j == 2: uni_res = uni_res + (b[i][j])*0.5 #actC, weight 0.5
            elif j == 3: uni_res = uni_res + (b[i][j])*0.33 #satW, weight 0.33
            elif j == 4: uni_res = uni_res + (b[i][j])*0.33 #satM, weight 0.33
            elif j == 5: uni_res = uni_res + (b[i][j])*0.33 #satE, weight 0.33
            elif j == 6: uni_res = uni_res + (b[i][j])*2 #agc, weight 2
            elif j == 7: uni_res = uni_res + (b[i][j])*2 #hc, weight 2
            #print (f"i={i+1} j={j+1} a[j]={a[j]} b[i][j]= {b[i][j]}")

        c[i] = c[i] + uni_res/8
        res = res + f" {i} : '{c[i]}', "
    res = res + "99:'5.0'}"
    return res
