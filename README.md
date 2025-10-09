Dev Guide

color palette: https://coolors.co/palette/dec9e9-dac3e8-d2b7e5-c19ee0-b185db-a06cd5-9163cb-815ac0-7251b5-6247aa

Components
- LoginContainer (React)
    - LoginForm (React) - handles state, submit
        - Input (Lit) - input element
        - Button (Lit) 

- MainPage (React) - Hello world
    - Header (React)
        - Name/Title (Lit/React)
        - User greeting (Lit/React)
        - Logout (Lit/React)
    - MainContent (React)
        - ItemList
            - SearchBar
                - input (Reuse input element )
                - button (Reuse button)
            - Items - for collections of items (array)
                display image, name, price, add to cart button?
        - Cart (right side)
            - items in cart
                - small image, name, item count, total price
            - total price
    
        


Lit components to create
- logo (large )
- text (Header, regular, large, greetings)


refactor Lit components
- button (not just for login)
- input (not just for login)

set prefix for lit component - Lit<component>

DONT FORGET TO CREATE UNIT TESTS!!!