export class Users {
    constructor(
        public id: number,
        public userName: string,
        public password: string,
        public firstName: string,
        public secondName: string,
        public email: string,
        public active: boolean,
        public userGroup: string
    ){

    }
}