import React from 'react';
import Firstsection from './Firstsection';
import Section from "./Section";
import Lastsection from "./Lastsection";
function Content(){
    return(
        <div>
        <Firstsection
        title="Model S"
        descn="Order Online for Touchless Delivery"
        lbtxt="custom order"
        rbtxt="existing inventory"
        bilink="model-s.jpg"
        />
        <Section
        title="Model Y"
        descn="Order Online for Touchless Delivery"
        lbtxt="custom order"
        rbtxt="Existing inventory"
        bilink="model-y.jpg"
        />
        <Section
        title="Model 3"
        descn="Order Online for Touchless Delivery"
        lbtxt="custom order"
        rbtxt="existing inventory"
        bilink="model-3.jpg"
        />
        <Section
        title="Model X"
        descn="Order Online for Touchless Delivery"
        lbtxt="custom order"
        rbtxt="existing inventory"
        bilink="model-x.jpg"
        />
        <Section
        title="Solar Panels"
        descn="Lower Cost Solar Panels in America"
        lbtxt="custom order"
        rbtxt="existing inventory"
        bilink="solar-panel.jpg"
        />
        <Section
        title="Solar Roof"
        descn="Produce Clean Energy From Your Roof"
        lbtxt="custom order"
        rbtxt="existing inventory"
        bilink="solar-roof.jpg"
        />
        <Lastsection
        title="Accessories"
        lbtxt="Shop now"
        bilink="accessories.jpg"
        />
        </div>
    )
}
export default Content