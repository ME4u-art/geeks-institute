#1#
brand =  {
    "creation_date":1975,
    "creator_name":"Amancio Ortega Gaona"
    ,"type_of_clothes":["men","women","children","home"],
    "international_competitors":["Gap","H&M","Benetton"],
    "number_stores":7000,
    "major_color":{"France":"blue",
                   "Spain":"red",
                   "US":"pink,green"
                   }
    }

#2#
brand["number_stores"]=2
#3#
clients = ", ".join(brand['type_of_clothes'])
print(f"Zara makes clothes for: {clients}")
#4#
brand["country_creation"] = "Spain"
#5#
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
    print("Key exists! and value is append ")
else:
    print("Key dosen`t exist!!! ")

#6#
brand["creation_date"]=None
#7#
print(brand["international_competitors"][-1])
#8#
print(brand["major_color"]["US"])
#9#
print(f"the  length of the dictionary is: {len(brand)}")
#10#
key_of_dic = filter(lambda kay : True,brand)
coutn_of_key = len(list(key_of_dic))
print(f"the amount of the keys in dictionary brand: {coutn_of_key}")
#11#
more_on_zara={
    "creation_date":1975,
    "number_stores":10000
}
#12#
brand.update(more_on_zara)
#13#
print(brand["number_stores"])
#what happend is the "brand" has been update with the values of "more_on_zara" # 