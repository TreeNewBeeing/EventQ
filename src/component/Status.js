import React from 'react';
import ReactDOM from 'react-dom';
import Event from './Event';
import '../css/status.css';
export default class Status extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mode: 'normal',
        }
    }
    buttonMouseOver(e){
        e.target.style.backgroundColor='green';
    }
    buttonMouseOut(e){
        e.target.style.backgroundColor='#4CAF50';
    }

    clickTimeLabel(){

    }

    scroll(e){
        console.log(e);
        // e.target.style.left = e.offsetX;
    }


    renderEvent(){
        console.log(this.props.display);
        let a = [];
        for(let i=0; i<8; i++){
            a.push(
                <Event
                        display={this.props.display}
                        left={50+i*400}
                        degree={Math.random()*30-15}
                        x={Math.random()*20-10}
                        y={Math.random()*20-10}/>
            );
        }
        return a;
    }
    render(){
        return (
            <div>
                    <div style={{
                        width: '80%',
                        height: '100px',
                        // border: '1px solid',
                        margin: '0 auto',}}>
                        <h1 style={{float:'left'}}>March 31</h1>
                        <h1 style={{clear:'both'}} />
                        <hr style={{margin:'10px 0'}}/>
                    </div>
                        <div style={{
                                width: '80%',
                                height:'100%',
                                margin: '0 auto',}}
                                className='Time'>
                        <h1 style={{
                            // border: '1px solid',
                            float: 'left',
                            width: '10%'}}
                            >8:00</h1>
                        <h1 style={{clear:'both'}}/>
                        {/* </div> */}
                    </div>
                    <div style={{
                        position:'relative',
                        // left:'-10%',
                        overflowX: 'scroll',
                        width: '100%',
                        height: '550px',
                        margin: '10px 0',}}
                        className='EventWrapper'
                        onScroll={this.scroll}
                        >
                        {this.renderEvent()}
                    </div>

                        <div style={{
                                width: '80%',
                                height:'100%',
                                margin: '0 auto',}}
                                className='Time'>
                        <h1 style={{
                            // border: '1px solid',
                            float: 'left',
                            width: '10%'}}
                            >9:00</h1>
                        <h1 style={{clear:'both'}}/>
                        {/* </div> */}
                    </div>
                    <div style={{
                        position:'relative',
                        // left:'-10%',
                        // overflow:'hidden',
                        overflowX: 'scroll',
                        // paddingRight: '20px',
                        width: '100%',
                        height: '550px',
                        margin: '10px 0',}}
                        className='EventWrapper'
                        onScroll={this.scroll}
                        >
                        {this.renderEvent()}
                    </div>



            </div>
        )
    }
}