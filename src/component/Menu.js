import React from 'react';
import { relative } from 'path';
import { clearInterval } from 'timers';



export default class Menu extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            focus: false,
            menu: false,
            roll:false,
        }
        this.menuStyle = {
            position:'relative',
            marginRight:'15px',
            display:'inline-block',
            visibility:'visible',
            cursor:'pointer',
            opacity:1,
            transition: 'margin-right 0.3s, visibility 0.2s, opacity 0.2s',
        };
        this.nonMenuStyle = {
            position:'relative',
            marginRight:'-15px',
            display:'inline-block',
            visibility:'hidden',
            cursor:'pointer',
            opacity:0,
            transition: 'margin-right 0.3s, visibility 0.2s, opacity 0.2s',
        };
    }

    render(){
        return (
            <div style={{height:'70px',
                // border: '1px solid',
            }}>
                <div style={{width:'40px',height:'40px',
                        position:'relative',
                        float:'right',
                        top: '30%',
                        right: '5%',
                        // border: '1px solid',
                        cursor:'pointer',
                        padding:' 8px',
                        opacity: this.state.focus?'0.1':'1',
                        transform: this.state.menu?'rotate(90deg)':'rotate(0deg)',
                        transition: 'opacity 0.3s, transform 0.3s',
                }}
                onClick={(e)=>{
                    this.setState(Object.assign(this.state,{menu: !this.state.menu}))
                }}
                onMouseOver={(e)=>{
                    this.setState(Object.assign(this.state,{focus: true}));
                }}

                onMouseLeave={(e)=>{
                    if(!this.state.menu){
                        this.setState(Object.assign(this.state,{focus: false}));
                    }
                }}>

                    <ul>
                        <li style={{height:'4.5px',borderRadius:'5px',
                            backgroundColor:'black',
                            marginBottom:'3.5px',
                            // transform:'rotate(90deg)',
                            }}/>
                        <li style={{height:'4.5px',borderRadius:'5px',
                            backgroundColor:'black',
                            marginBottom:'3.5px',
                            // transform:'rotate(90deg)',
                        }}/>
                        <li style={{height:'4.5px',borderRadius:'5px',
                            backgroundColor:'black',
                            marginBottom:'3.5px',
                            // transform:'rotate(90deg)',
                        }}/>
                    </ul>

                </div>
                <ul style={{height:'40px',position:'relative',
                    top: '30%',
                    padding: '8px',
                    right: '5%',
                    // border: '1px solid',
                    float:'right',

                }}>
                    <li style={this.state.menu?this.menuStyle:this.nonMenuStyle}
                        onClick={()=>{
                            this.props.changeDisplay('standard');
                        }}>
                        Standard
                    </li>
                    <li style={this.state.menu?this.menuStyle:this.nonMenuStyle}
                        onClick={()=>{
                            this.props.changeDisplay('gallery');
                        }}>Gallery</li>
                    <li style={this.state.menu?this.menuStyle:this.nonMenuStyle}
                        onClick={()=>{
                            console.log(this.state.roll);
                            if(this.state.roll){
                                clearInterval(this.interval);
                                this.setState(Object.assign(this.state, {roll: false}));
                            }else{
                                this.interval = setInterval(()=>{
                                    this.props.changeDisplay('gallery');
                                },50);
                                this.setState(Object.assign(this.state, {roll: true}));
                            }
                        }}>Roll</li>
                </ul>
            </div>
        )
    }
}