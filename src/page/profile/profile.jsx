import './profile.css'
export const Profile = () => {
    return(
        <div className="profile">
            <div className='pg'>
                <div className="about">
                    <input className='imge' type={Image}></input>
                    <p className='namee'>Doflamingo Donquixote</p>
                    <div className='abo'>
                        <div className='phone'></div>
                        <p className='numbe'>+976 89898989</p>
                    </div>
                    <div className='emai'>
                        <div className='mai'></div>
                        <p className='mail'>d.doflamingo@01gmail.com</p>
                    </div>
                </div>
                <div className='sets'>
                    <p className='ys'>Your set of words</p>
                    <div className='setss'></div>
                </div>
            </div>
            <div className='level'>
                <div className='aclvl'>
                    <p className='acc'>Account level</p>
                    <div className='nxp'>
                        <p className='naim'>8</p>
                        <p className='axp'>831/1000xp</p>
                    </div>
                    <div className='grap'>
                        <div className='grapa'></div>
                    </div>
                </div>
                <div className='wclvl'>
                    <p className='word'>Account level</p>
                    <div className='wxp'>
                        <p className='aa'>A</p>
                        <p className='dxp'>450/1000xp</p>
                    </div>
                    <div className='wrap'>
                        <div className='wrapa'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}