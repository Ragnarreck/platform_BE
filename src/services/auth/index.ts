import moment from 'moment';
import uuid from 'uuid/v4';
import { User } from '../../db/models';

interface SignInProps {
    email: string;
    password: string;
}

interface SignUpProps extends SignInProps {
    name: string;
}

export const sign_up = (params: SignUpProps) => new User({
    ...params,
    skills: [],
    _id: uuid(),
    registration_date: moment().format('DD-MM-YYYY'),
}).save();

export const sign_in = ({ email }: SignInProps) => User
    .findOne({ email })
    .orFail(() => Error('No users with current email'));
