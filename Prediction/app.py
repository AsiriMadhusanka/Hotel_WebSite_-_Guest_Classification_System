from flask import Flask, request, json, jsonify
import pickle
import numpy as np
from flask_cors import CORS 
app = Flask(__name__)
CORS(app)

def prediction(lst):
    filename = 'model/Categorizernu.pickle'
    with open(filename, 'rb') as file:
        model = pickle.load(file)
    pred_value = model.predict([lst])
    return pred_value


@app.route('/', methods=['POST','GET'])
def index():
    
     pred_value = 0
     
     foods = request.get_json().get("foods")
     liquor = request.get_json().get("liquor")
     travelCategory = request.get_json().get("travelCategory")
     
     
     feature_list = []
     
     foods_list = ['SeaFood', 'Vegen', 'Vegetarian', 'AllFoods']
     liquor_list = ['No', 'Yes']
     travelCategory_list =['AffluentTravelers', 'Backpackers', 'FamilyTravelers', 'GreenTravelers', 'Voluntourism', 'WellnessSeekers']

     def traverse_list(lst, value):
            for item in lst:
                if item == value:
                    feature_list.append(1)
                else:
                    feature_list.append(0)
        
     traverse_list(foods_list, foods)
     traverse_list(liquor_list, liquor)
     traverse_list(travelCategory_list, travelCategory)
     
     pred_value = prediction(feature_list)
     print(pred_value)
     pred_value = np.round(pred_value[0],2)
     print(pred_value)
    #  return jsonify(pred_value)
     val = {"prediction": pred_value}
     print(val)
     return jsonify(val)
     
     
if __name__ == '__main__':
    app.run(debug=True)



# from flask import Flask, render_template, request
# import pickle
# import numpy as np

# app = Flask(__name__)

# def prediction(lst):
#     filename = 'model/Categorizer.pickle'
#     with open(filename, 'rb') as file:
#         model = pickle.load(file)
#         pred_value = model.predict([lst])
#     return pred_value

# @app.route('/', methods=['POST', 'GET'])
# def index():
    
#     pred = ""
    
#     if request.method == 'POST':
#         foods = request.form['foods']
#         liquor = request.form['liquor']
#         travelCategory = request.form['travelCategory']
        
#         feature_list = []
        
#         foods_list = ['SeaFood', 'Vegen', 'Vegetarian', 'AllFoods']
#         liquor_list = ['No', 'Yes']
#         travelCategory_list =['AffluentTravelers', 'Backpackers', 'FamilyTravelers', 'GreenTravelers', 'Voluntourism', 'WellnessSeekers']
        
#         def traverse_list(lst, value):
#             for item in lst:
#                 if item == value:
#                     feature_list.append(1)
#                 else:
#                     feature_list.append(0)
        
#         traverse_list(foods_list, foods)
#         traverse_list(liquor_list, liquor)
#         traverse_list(travelCategory_list, travelCategory)
        
#         # for item in Foods_list:
#         #     if item == Foods:
#         #         feature_list.append(1)
#         #     else:
#         #         feature_list.append(0)
#         pred = prediction(feature_list)
       
#         print(pred)
        
#     return render_template('index.html', pred = pred)

# if __name__ == '__main__':
#     app.run(debug=True)