import React, {Component} from "react"

class SampleClassComponent extends Component{
   render(){
      return(
         <div>
            {this.props.pets} 
            <h1>This is a Class Component</h1>
         </div>
      )
   }
}

export default SampleClassComponent