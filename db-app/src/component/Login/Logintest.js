login = () => {
    if (this.state.disabled) {
        return;
    } else {
        this.setState({
            overlayStyle: styles.overlayStyleHDisable,
            disabled: true,
            loginText: '登录中',
        },

            () => {
                new Promise(this.varifyLogin)// 登录前验证
                    .then(() => {// 验证通过
                        $.ajax({
                            url: Config.getUrl() + '/login/emailLogin',
                            type: 'POST',
                            dataType: 'json',
                            cache: false,
                            data: {
                                principle: this.state.email,
                                credential: this.state.password
                            },
                            success: (result) => {
                                if (this.state.CheckboxFlag) {
                                    const { cookies } = this.props;
                                    cookies.set('comeneedEmail', this.state.email, { path: '/' });
                                    cookies.set('comeneedPwd', this.state.password, { path: '/' });
                                }
                                get(Config.getUrl() + '/overview/toGetMainIndexOverview', {
                                    templateId,
                                });
                            },
                            error: (err) => {
                                this.setState({
                                    emailErr: (
                                        <div>
                                            <i className="icon iconfont icon-icon_fail"></i>
                                            <span>{err.responseJSON.errorMessage}</span>
                                        </div>
                                    ),
                                    overlayStyle: styles.overlayStyleH,
                                    disabled: false,
                                    loginText: '登录'
                                });
                            }
                        });
                    }, (errValue) => {// 验证出问题了
                        this.setState({
                            overlayStyle: styles.overlayStyleH,
                            disabled: false,
                            loginText: '登录',
                            emailErr: errValue.emailErr,
                            pwdErr: errValue.pwdErr,
                        });
                    });
            });
    }
}
