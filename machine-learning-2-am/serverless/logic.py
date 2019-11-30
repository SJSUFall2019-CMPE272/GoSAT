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
