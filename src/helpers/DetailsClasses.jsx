export class EducationDetails {
    constructor() {
        this.id = crypto.randomUUID();
        this.headerKey = "School";
    }
}

export class WorkExpDetails {
    constructor() {
        this.id = crypto.randomUUID();
        this.headerKey = "Company";
    }
}