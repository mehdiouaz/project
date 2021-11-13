import React from 'react';
import Itemcard from './Itemcard';
import Storedata from './Storedata';
const StoreItems = () => {
    return (
        <div>
            <h1 className="text-center mt-3">All items</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {Storedata.producData.map((item,index)=>{
                        return(
                          <Itemcard 
                              img={item.img}
                              title={item.title}
                              desc={item.desc}
                              price={item.price}
                              item={item} 
                              key={index}/>
                        )
                    })}
                   
                </div>

            </section>
        </div>
    );
};

export default StoreItems;