import { Component, PureComponent } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// functional component with React.memo
const FirstComponent = React.memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

// functional component with React.memo
const SecondComponent = React.memo(({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
);

// class component with PureComponent
class ThirdComponent extends PureComponent<IUser> {
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

// class component with PureComponent
class FourthComponent extends PureComponent<IProps> {
    render() {
        const { user } = this.props;
        return (
            <div>
                my name is {user.name}, my age is {user.age}
            </div>
        )
    }
}
