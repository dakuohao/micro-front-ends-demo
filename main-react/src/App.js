import './App.css';
import {Layout, Menu} from 'antd';

const {Header, Content, Footer} = Layout;

function App() {
    return (
        <div className="App">

            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1"><a href="/home">首页</a></Menu.Item>
                        <Menu.Item key="2"><a href="/vue2">vue2示例</a></Menu.Item>
                        <Menu.Item key="3"><a href="/vue3">vue3示例</a></Menu.Item>
                        <Menu.Item key="4"><a href="/react">react示例</a></Menu.Item>
                        <Menu.Item key="5"><a href="/angular">angular示例</a></Menu.Item>
                        <Menu.Item key="6"><a href="/h5">h5示例</a></Menu.Item>
                    </Menu>
                </Header>

                <Content style={{textAlign: 'center', minHeight: 300}}>

                    <div id="subapp">
                        Content 内容
                    </div>

                </Content>

                <Footer style={{textAlign: "center", color: "white", backgroundColor: "#1a1919"}}>
                    微前端落地实践 ©2021
                </Footer>
            </Layout>

        </div>
    );
}

export default App;
