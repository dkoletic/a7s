
export class User {
    active: boolean;
    address: string;
    company: string;
    created_at: string;
    dateofbirth: string;
    email: string;
    first_name: string;
    id: string;
    jobTitle: string;
    last_name: string;
    nickname: string;
    notes: string;
    phone: string;
    role: string;
    user_avatar_image: any;



    constructor(user?: any) {
        user = user || {};
        this.active = user.active || false;
        this.address = user.address || '';
        this.company = user.company || '';
        this.created_at = user.created_at || '';
        this.dateofbirth = user.birhday || '';
        this.email = user.email || '';
        this.first_name = user.first_name || '';
        this.id = user.id || 0;
        this.jobTitle = user.jobTitle || '';
        this.last_name = user.last_name || '';
        this.nickname = user.nickname || '';
        this.notes = user.notes || '';
        this.phone = user.phone || '';
        this.role = user.role || '';
        this.user_avatar_image = user.user_avatar_image || null;
    }
}
