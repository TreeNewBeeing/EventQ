import React from 'react';
import { setTimeout } from 'timers';

export default class Event extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mode: 'normal',
            mood: 'normal',
        }
    }
    renderDescription() {
        if(this.state.mode=='description'){
            return (
                <div>
                    <hr style={{margin:'10px 0'}}/>
                    <p style={{padding:'10px'}}
                        >jlvhljvjhv</p>
                </div>
            )
        }
    }
    render(){
        console.log(`rotate(${this.props.degree}deg) translate(${this.props.x},${this.props.y})`) ;
        return (


            <div style={{
                overflow: 'hidden',
                position: 'absolute',
                width: '300px',
                height: '380px',
                // border: '1px solid',
                left:`${this.props.left}px`,
                boxShadow:'0 6px 12px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                margin:'50px 10px',
                float:'left',
                // backgroundColor:this.state.mood == 'bad'?'#f44336': (this.state.mood=='good'? '#4CAF50':'white'),
                // color:this.state.mood=='normal'?'black':'white',
                transform:this.props.display=='gallery'?`rotate(${this.props.degree}deg) translate(${this.props.x}px,${this.props.y}px)`:'',
                // transform: `rotate(${this.props.degree}deg) translate(${this.props.x}px,${this.props.y}px)`,
                transition: 'background 0.3s linear, transform 0.3s',
                padding: '10px'}}

                className='Event'>
                <span>The Organizer</span>
                <hr style={{margin:'10px 0'}}/>
                <h4>Events Title</h4>
                <div style={{
                    margin:this.state.mode=='description'?'-20px auto':'20px auto',
                    width:'90%',
                    padding: '10px 10px',
                    borderRadius:'5px',
                    cursor: 'pointer',
                    opacity: this.state.mode=='description'? 0:1,
                    boxShadow:'0 6px 12px 0 rgba(0,0,0,0.07), 0 6px 20px 0 rgba(0,0,0,0.07)',
                    // border: '1px solid',
                    transition: 'margin 0.3s ease-out, opacity 0.3s',
                }}

                    className="timeLabel"
                    onMouseOver={()=>{
                        console.log(Object.assign(this.state,{mode: 'timelabel'}));
                        this.setState(Object.assign(this.state,{mode: 'timelabel'}));
                    }}
                    onMouseOut={()=>{
                        this.setState(Object.assign(this.state,{mode: 'normal'}));
                        // this.setState({...this.state,mode: 'normal'});
                    }}
                    onClick={this.clickTimeLabel}>
                    Start at:&nbsp;&nbsp;
                        <h5 style={{display:'inline', border:'1px solid red', padding:'3px 5px', borderRadius:'5px'}}>
                    8:15 A.M. </h5>
                </div>
                <div style={{
                    margin:this.state.mode=='timelabel'? '0px auto':'-60px auto',
                    left:'7.5%',
                    width:'85%',
                    padding: '10px 10px',
                    borderRadius:'5px',
                    position:'absolute',
                    boxShadow:'0 6px 12px 0 rgba(0,0,0,0.07), 0 6px 20px 0 rgba(0,0,0,0.07)',
                    // display:this.state.mode=='timelabel'? 'block':'none',
                    opacity:this.state.mode=='timelabel'? 1:0,
                    transition: this.state.mode=='description'? '':'opacity 0.8s ease-out, margin 0.5s',
                }}
                    onMouseOver={()=>{
                        console.log(Object.assign(this.state,{mode: 'timelabel'}));
                        this.setState(Object.assign(this.state,{mode: 'timelabel'}));
                    }}
                    onMouseOut={()=>{
                        this.setState(Object.assign(this.state,{mode: 'normal'}));
                        // this.setState({...this.state,mode: 'normal'});
                    }}

                    className="timeLabel">
                    Still have:&nbsp;&nbsp;
                        <h5 style={{display:'inline', border:'1px solid red', padding:'3px 5px', borderRadius:'5px'}}>
                    20 min </h5>
                </div>
                <div style={{
                    margin:this.state.mode=='timelabel'?'60px auto':'-60px auto',
                    left:'7.5%',
                    width:'85%',
                    // bottom:'20px',
                    padding: '10px 10px',
                    borderRadius:'5px',
                    position:'absolute',
                    // border: '1px solid',
                    boxShadow:'0 6px 12px 0 rgba(0,0,0,0.07), 0 6px 20px 0 rgba(0,0,0,0.07)',
                    opacity:this.state.mode=='timelabel'? 1:0,
                    transition: this.state.mode=='description'? '':'opacity 0.8s ease-out, margin 0.5s',
                }}

                    onMouseOver={()=>{
                        console.log(Object.assign(this.state,{mode: 'timelabel'}));
                        this.setState(Object.assign(this.state,{mode: 'timelabel'}));
                    }}
                    onMouseOut={()=>{
                        this.setState(Object.assign(this.state,{mode: 'normal'}));
                        // this.setState({...this.state,mode: 'normal'});
                    }}
                    className="timeLabel">
                    Latest Deadline:&nbsp;&nbsp;
                        <h5 style={{display:'inline', border:'1px solid red', padding:'3px 5px', borderRadius:'5px'}}>
                    8: 20 A.M. </h5>
                </div>
                <div style={{
                    margin:this.state.mode=='timelabel'? '100px auto':'20px auto',
                    top:this.state.mode=='description'?'-40px':'0px',
                    width:'90%',
                    padding: '20px 20px',
                    // display:this.state.mode=='timelabel'? 'none':'block',
                    borderRadius:'5px',
                    position:'relative',
                    // border: '1px solid',
                    boxShadow:'0 6px 12px 0 rgba(0,0,0,0.07), 0 6px 20px 0 rgba(0,0,0,0.07)',
                    opacity:this.state.mode=='timelabel' || this.state.mode=='description'? 0:1,
                    transition: 'opacity 0.3s, top 0.3s ease-out, margin 0.3s ease-out',
                    }}

                    className="locationLabel">

                    <h5 style={{display:'block', padding:'3px 5px', borderRadius:'5px'}}>
                    5260 Fiore Terrace, San Diego </h5>
                </div>
                <div style={{
                    // left:'7.5%',
                    margin:'20px auto',
                    top:this.state.mode=='description'? '-120px':'0px',
                    width:'90%',
                    height:this.state.mode=='description'? '250px' : 'auto',
                    position:'relative',
                    padding: '10px 10px',
                    cursor:'pointer',
                    // display:this.state.mode=='timelabel'? 'none':'block',
                    borderRadius:'5px',
                    // border: '1px solid',
                    boxShadow:'0 6px 12px 0 rgba(0,0,0,0.07), 0 6px 20px 0 rgba(0,0,0,0.07)',
                    opacity:this.state.mode=='timelabel'? 0:1,
                    transition: ' top 0.5s ease-out, opacity 0.5s ease-out',
                    }}

                    className="description"
                    onMouseOver={()=>{
                        this.setState(Object.assign(this.state, {mode:'description'}))
                    }}
                    onMouseLeave={()=>{

                        this.setState(Object.assign(this.state, {mode:'normal'}))
                    }}
                    >
                        <h5 style={{
                            display:'inline',
                            padding:'3px 5px', borderRadius:'5px'}}>
                    Description</h5>
                        { this.renderDescription() }
                </div>
                <div style={{
                    position:'relative',
                    margin:'10px auto',
                    width:'90%',
                    // padding: '10px 10px',
                    borderRadius:'5px',
                    // border: '1px solid',
                    }}

                    className="btn_group">
                <button
                    style={{border:'none', color:'white', height:'30px',borderRadius:'15px',
                        backgroundColor:this.state.mood == 'bad'?'#e43326':'#f44336',
                        width:this.state.mood == 'bad' ? '250px' : (this.state.mood == 'good' ?'0px':'80px'),
                        opacity:this.state.mode=='timelabel'|| this.state.mode=='description'? 0:1,
                        display: 'inline-block',
                        whiteSpace:'nowrap',
                        boxShadow:this.state.mood == 'bad'?'0 6px 12px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.2)':'0 6px 12px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.1)',
                        transition:`${this.state.mood == 'bad' || this.state.mood == 'good'?'width 0.3s':'opacity 0.3s, box-shadow 0.3s, background-color 0.3s, width 0.3s'}`
                    }}



                    onMouseOver={(e)=>{
                        this.setState(Object.assign(this.state,{mood:'bad'}));
                    }}
                    onMouseOut={(e)=>{
                        this.setState(Object.assign(this.state,{mood:'normal'}));
                    }}
                    onClick={()=>{

                    }}
                    >{this.state.mood=='good'?'':'Cancel'}</button>


                <button
                    style={{border:'none', color:'white',float:'right', height:'30px',borderRadius:'15px',
                        backgroundColor:this.state.mood == 'good' ?'green':'#4CAF50',
                        width:this.state.mood == 'good' ? '250px' : (this.state.mood=='bad'?'0px':'80px'),
                        opacity:this.state.mode=='timelabel'? 0:1,
                        display: 'inline-block',
                        // overflow:'hidden',
                        whiteSpace:'nowrap',
                        boxShadow:this.state.mood=='good'?'0 6px 12px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.2)':'0 6px 12px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.1)',
                        transition:`${this.state.mood == 'bad' || this.state.mood == 'good'?'width 0.3s':'opacity 0.3s, box-shadow 0.3s, background-color 0.3s, width 0.3s'}`,

                    }}

                    onMouseOver={(e)=>{
                        this.setState(Object.assign(this.state,{mood:'good'}));
                    }}
                    onMouseOut={(e)=>{
                        this.setState(Object.assign(this.state,{mood:'normal'}));
                    }}
                    onClick={()=>{

                    }}

                    > {this.state.mood=='bad'?'':'Check-in'}</button>
                </div>

            </div>

        )
    }
}