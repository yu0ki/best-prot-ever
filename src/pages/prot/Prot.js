import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Container from '../components/Container';

const Prot = ( {novel} ) => {
    // 初期データ
    // 章
    const [section, setSection] = useState(
        [{novel_id: novel.id}]
    );
  
    {/* ログイン弾き */}
    if (auth.currentUser) {
        return (
            <Container>
                <div className='mx-5'>

                </div>
            </Container>
        );
    } else {
        return (<Navigate to={"/"}></Navigate>);
    }


}

export default Prot