{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fswiss\fcharset0 Helvetica-Bold;}
{\colortbl;\red255\green255\blue255;\red36\green36\blue36;\red1\green131\blue14;\red67\green97\blue238;
\red153\green153\blue153;\red204\green16\blue177;}
{\*\expandedcolortbl;;\csgenericrgb\c14118\c14118\c14118;\csgenericrgb\c392\c51373\c5490;\csgenericrgb\c26275\c38039\c93333;
\csgenericrgb\c60000\c60000\c60000;\csgenericrgb\c80000\c6275\c69412;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh18000\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 db.createCollection
\f1\b (
\f0\b0 \cf3 "product"
\f1\b \cf2 );
\f0\b0 \cf0 \
\cf2 db.product.deleteMany
\f1\b (\{\});
\f0\b0 \cf0 \
\
\cf2 db.getCollection
\f1\b (
\f0\b0 \cf3 "product"
\f1\b \cf2 )
\f0\b0 .insertMany
\f1\b ([
\f0\b0 \cf0 \
\cf2     
\f1\b \{
\f0\b0 \cf0 \
\cf2         id
\f1\b :
\f0\b0  \cf4 1
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_id
\f1\b :
\f0\b0  \cf3 'P-01'
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_name
\f1\b :
\f0\b0  \cf3 'iPhone'
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_price
\f1\b :
\f0\b0  \cf4 100000
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_quantity
\f1\b :
\f0\b0  \cf4 10
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023/04/05T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2         updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023/05/05T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2         created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         updated_by
\f1\b :
\f0\b0  \cf3 "Subha"\cf0 \
\cf2     
\f1\b \},
\f0\b0 \cf0 \
\cf2     
\f1\b \{
\f0\b0 \cf0 \
\cf2         id
\f1\b :
\f0\b0  \cf4 2
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_id
\f1\b :
\f0\b0  \cf3 'P-02'
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_name
\f1\b :
\f0\b0  \cf3 'Watches'
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_price
\f1\b :
\f0\b0  \cf4 20000
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_quantity
\f1\b :
\f0\b0  \cf4 22
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2022/11/17T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2         updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023/09/15T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2         created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         updated_by
\f1\b :
\f0\b0  \cf3 "Subha"\cf0 \
\cf2     
\f1\b \},
\f0\b0 \cf0 \
\cf2     
\f1\b \{
\f0\b0 \cf0 \
\cf2         id
\f1\b :
\f0\b0  \cf4 3
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_id
\f1\b :
\f0\b0  \cf3 'P-03'
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_name
\f1\b :
\f0\b0  \cf3 'Shoes'
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_price
\f1\b :
\f0\b0  \cf4 6000
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_quantity
\f1\b :
\f0\b0  \cf4 23
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023/01/23T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2         updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023/08/10T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2         created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         updated_by
\f1\b :
\f0\b0  \cf3 "Subha"\cf0 \
\cf2     
\f1\b \},
\f0\b0 \cf0 \
\cf2     
\f1\b \{
\f0\b0 \cf0 \
\cf2         id
\f1\b :
\f0\b0  \cf4 4
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_id
\f1\b :
\f0\b0  \cf3 'P-04'
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_name
\f1\b :
\f0\b0  \cf3 'Bags'
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_price
\f1\b :
\f0\b0  \cf4 4000
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_quantity
\f1\b :
\f0\b0  \cf4 18
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023/10/01T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2         updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023/12/05T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2         created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         updated_by
\f1\b :
\f0\b0  \cf3 "Subha"\cf0 \
\cf2     
\f1\b \},
\f0\b0 \cf0 \
\cf2     
\f1\b \{
\f0\b0 \cf0 \
\cf2         id
\f1\b :
\f0\b0  \cf4 5
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_id
\f1\b :
\f0\b0  \cf3 'P-05'
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_name
\f1\b :
\f0\b0  \cf3 'T-Shirt'
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_proce
\f1\b :
\f0\b0  \cf4 700
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         prod_quantity
\f1\b :
\f0\b0  \cf4 30
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2022/09/25T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2         updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023/07/03T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2         created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2         updated_by
\f1\b :
\f0\b0  \cf3 "Subha"\cf0 \
\cf2     
\f1\b \},
\f0\b0 \cf0 \
\pard\pardeftab720\partightenfactor0

\f1\b \cf2 ]);
\f0\b0 \cf0 \
\
\
\
\pard\pardeftab720\partightenfactor0
\cf5 //Find all the documents\cf0 \
\pard\pardeftab720\partightenfactor0
\cf2 db.getCollection
\f1\b (
\f0\b0 \cf3 "product"
\f1\b \cf2 )
\f0\b0 .find
\f1\b (\{\});
\f0\b0 \cf0 \
\
\cf2 db.product.find
\f1\b (\{
\f0\b0  prod_price
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  $lte
\f1\b :
\f0\b0  \cf4 4000
\f1\b \cf2 ,
\f0\b0  $gte
\f1\b :
\f0\b0  \cf4 500\cf2  
\f1\b \}
\f0\b0  
\f1\b \});
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf5 //Chooses the specific document\cf0 \
\pard\pardeftab720\partightenfactor0
\cf2 db.product.aggregate
\f1\b ([
\f0\b0 \cf0 \
\cf2     
\f1\b \{
\f0\b0  $match
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  name
\f1\b :
\f0\b0  \cf3 'Bags'
\f1\b \cf2 ,
\f0\b0  prod_id
\f1\b :
\f0\b0  \cf3 'P-04'\cf2  
\f1\b \}
\f0\b0  
\f1\b \}]);
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf5 //Average price\cf0 \
\pard\pardeftab720\partightenfactor0
\cf6 const\cf2  avg = db.getCollection
\f1\b (
\f0\b0 \cf3 "product"
\f1\b \cf2 )
\f0\b0 .\cf0 \
\pard\pardeftab720\partightenfactor0
\cf2     aggreagte
\f1\b ([
\f0\b0 \cf0 \
\cf2         
\f1\b \{
\f0\b0 \cf0 \
\cf2             $group
\f1\b :
\f0\b0 \cf0 \
\cf2                 
\f1\b \{
\f0\b0 \cf0 \
\cf2                     _id
\f1\b :
\f0\b0  \cf3 "$inventory_id"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2                     avg
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  $avg
\f1\b :
\f0\b0  \cf3 "$prod_price"\cf2  
\f1\b \}
\f0\b0 \cf0 \
\cf2                 
\f1\b \}
\f0\b0 \cf0 \
\cf2         
\f1\b \}
\f0\b0 \cf0 \
\cf2     
\f1\b ]);
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf5 //Count the number of products lesser than 20\cf0 \
\pard\pardeftab720\partightenfactor0
\cf6 const\cf2  count = db.getCollection
\f1\b (
\f0\b0 \cf3 "products"
\f1\b \cf2 )
\f0\b0 .\cf0 \
\pard\pardeftab720\partightenfactor0
\cf2     aggregate
\f1\b ([
\f0\b0 \cf0 \
\cf2         
\f1\b \{
\f0\b0 \cf0 \
\cf2             $match
\f1\b :
\f0\b0 \cf0 \
\cf2                 
\f1\b \{
\f0\b0 \cf0 \
\cf2                     product_quantity
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  $lt
\f1\b :
\f0\b0  \cf4 20\cf2  
\f1\b \}
\f0\b0 \cf0 \
\cf2                 
\f1\b \}
\f0\b0 \cf0 \
\cf2         
\f1\b \},
\f0\b0 \cf0 \
\cf2         
\f1\b \{
\f0\b0 \cf0 \
\cf2             $group
\f1\b :
\f0\b0 \cf0 \
\cf2                 
\f1\b \{
\f0\b0 \cf0 \
\cf2                     _id
\f1\b :
\f0\b0  \cf6 null
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2                     totalProducts
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  $sum
\f1\b :
\f0\b0  \cf4 1\cf2  
\f1\b \}
\f0\b0 \cf0 \
\cf2                 
\f1\b \}
\f0\b0 \cf0 \
\cf2         
\f1\b \}
\f0\b0 \cf0 \
\cf2     
\f1\b ]);
\f0\b0 \cf0 \
}