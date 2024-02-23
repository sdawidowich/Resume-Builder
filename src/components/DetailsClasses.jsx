export class EducationDetails {
    constructor() {
        this.id = crypto.randomUUID();
        this.itemHeader = "School";
    }
}

export class WorkExpDetails {
    constructor() {
        this.id = crypto.randomUUID();
        this.itemHeader = "Company";
    }
}