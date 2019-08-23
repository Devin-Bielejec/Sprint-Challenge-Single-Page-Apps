import React, { useState } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

export default function TabNav() {
    const [activeItem, setActiveItem] = useState("home")

    const handleItemClick = (tabName) => {
        console.log(tabName);
        setActiveItem(tabName);
    }
    return (
        <Menu>
            <Menu.Item
            as={NavLink}
            to="/"
            name='home'
            active={activeItem === 'home'}
            onClick={()=> handleItemClick("home")}
            >
            Home Page
            </Menu.Item>

            <Menu.Item
            as={NavLink}
            to="/character"
            name='characters'
            active={activeItem === 'characters'}
            onClick={()=> handleItemClick("characters")}
            >
            Characters
            </Menu.Item>

            <Menu.Item
            as={NavLink}
            to="/location"
            name='locations'
            active={activeItem === 'locations'}
            onClick={()=> handleItemClick("locations")}

            >
            Locations
            </Menu.Item>

            <Menu.Item
            as={NavLink}
            to="/episode"
            name='episodes'
            active={activeItem === 'episodes'}
            onClick={()=> handleItemClick("episodes")}
            
            >
            Episodes
            </Menu.Item>
        </Menu>
    )

};

