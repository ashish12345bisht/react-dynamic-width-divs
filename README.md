# npm i react-dynamic-width-divs

Go to the component you want to add your Dynamic Width Div Container 

### import {Container} from 'react-dynamic-width-divs/dist';        //at the top

## call ```<Container total={1000} items={[100,200]} labelLinesVisible={false} />```

# props -> 

### total
total width

### items
type array ->  array of values you want [tip-> inner div width = items[i]/totol * 100 %]

### containerStyles
styles for outer most container type object

### innerContainerStyles
styles for inner container type object

### labelLinesVisible
label lines visible true/false

### labelLinesContainer
styles for main label container type object

### innerLabelLinesContainer
styles for inner label container type object

### hrStyles
styles for label lines type object

### labelStyles
styles for label type object
