import style from './WholeProfile.module.scss'
function WholeProfile ({user}) {
  debugger
    return (
        <>
            <div className={style.container}>
                {user.user.data.name}
            </div>
        </>
    )
}

export default WholeProfile;