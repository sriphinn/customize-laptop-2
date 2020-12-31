import React from 'react';
import Selections from './Selections';

export default class Options extends React.Component {

    render() {
      const {feature, featureHash} = this.props 
      console.log(featureHash)
      const options = this.props.features[feature].map((item, index) => {
        return (
        <Selections 
            features={this.props.features}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
            feature={feature} 
            item={item}
            key={index}
        />
        )
      }); 
      return (
        <div>
          {options}
        </div>
      )     
    };  
}
