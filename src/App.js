import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'
import Subject from './components/Subject'
import Control from './components/Control'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.max_content_id = 3;
        this.state = {
            mode:'welcome',
            selected_content_id:3,
            subject:{
                title:"청구경희한의원 수원점", 
                sub:"열린 마음과 비판적인 사고로 임상과 연구에 임하며 치료에 최선을 다하는 청구경희한의원 수원점입니다."
            },
            welcome:{
                title:"안녕하세요.", 
                desc:"청구경희한의원 수원점의 블로그에 오신 것을 환영합니다."
            },
            contents:[
                {id:1, title:"진료시간", desc:"월-금 매일 8시, 토 2시까지"},
                {id:2, title:"위치", desc:"수원시청역 7번출구 앞"},
                {id:3, title:"인사말", desc:"안녕하세요. 김형규입니다."}
            ]
        }
    }
    getReadContent(){
        var i = 0;
        while(i < this.state.contents.length){
            var data = this.state.contents[i];
            if(data.id === this.state.selected_content_id){
                return data;
                //break;
            };
            i = i + 1
        }
    }
    getContent(){
        var _title, _desc, _article = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if(this.state.mode === 'read'){
            var _content = this.getReadContent();
            _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
        } else if(this.state.mode === 'create'){
            _article = <CreateContent onSubmit={function(_title, _desc){
                        this.max_content_id = this.max_content_id + 1;
                        var _contents = this.state.contents.concat(
                            {id:this.max_content_id, title:_title, desc:_desc}
                            );
                        this.setState({
                            contents:_contents,
                            mode:"read",
                            selected_content_id:this.max_content_id
                        })
                    }.bind(this)}></CreateContent>
        } else if(this.state.mode === 'update'){
            _content = this.getReadContent();
            _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc){
                        var _contents = Array.from(this.state.contents);
                        var i = 0;
                        while(i < _contents.length){
                            if(_contents[i].id === _id){
                                _contents[i] = {id:_id, title:_title, desc:_desc};
                                break
                            }
                            i = i + 1
                        }
                        this.setState({
                            contents:_contents,
                            mode:"read"
                        })
                    }.bind(this)}></UpdateContent>
        }
        return _article
    }
    render() {
        return(
            <div className="App">
                <Subject 
                    title={this.state.subject.title} 
                    sub={this.state.subject.sub}
                    onChangePage={function(){
                        this.setState({mode:'welcome'});
                    }.bind(this)}
                >
                </Subject>
                <TOC 
                    data={this.state.contents}
                    onChangePage={function(id){
                        this.setState({
                            mode:'read',
                            selected_content_id:Number(id)
                        });
                    }.bind(this)}
                >
                </TOC>
                <Control 
                    onChangeMode={function(_mode){
                        if(_mode === 'delete'){
                           if(window.confirm('진짜로요?')){
                               var _contents = Array.from(this.state.contents);
                               var i = 0;
                               while(i < _contents.length){
                                   if(_contents[i].id === this.state.selected_content_id){
                                       _contents.splice(i, 1);
                                       break;
                                   }
                                   i = i + 1
                               }
                               this.setState({
                                   mode:'welcome',
                                   contents:_contents
                               });
                               alert('삭제되었습니다ㅠ')
                           }
                        } else {
                            this.setState({
                                mode:_mode
                            });
                        }
                    }.bind(this)}>
                </Control>
                {this.getContent()}
            </div>
        );
    }
}

export default App;
