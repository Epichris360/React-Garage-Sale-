import React, { Component } from 'react'
import { Nav, Footer, Item, Map } from './presentation'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            map:null
        }
    }
    render(){
        const markers = [
            {id:1, key:'1', defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7224017,lng:-73.9896719}},
            {id:1, key:'2', defaultAnimation:2, label:'New Balance Sneakers', position:{lat:40.71224017,lng:-73.9896719}}
        ]
        return(
            <div className="wrapper">
                    <div className="sidebar" data-background-color="white" data-active-color="danger">

                        <div className="sidebar-wrapper" style={{height:960}} >
                            <Map 
                                onMapReady={ map => {
                                    if(this.state.map == null)
                                        return
                                    this.setState({map})
                                }}
                                markers={markers}
                                zoom={14}
                                center={{lat:40.7224017, lng:-73.9896719}}
                                containerElement={ <div style={{height:100+'%'}} /> }
                                mapElement={ <div style={{height:100+'%'}} /> }
                            />
                        </div>
                    </div>

                    <div className="main-panel">
                        
                        <Nav />

                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    {
                                        [1,2,3,4].map( (n,i) => {
                                            return(
                                                <Item key={i} />
                                            )
                                            
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <Footer />
                        

                    </div>
            </div>
        )
    }
}

export default Home