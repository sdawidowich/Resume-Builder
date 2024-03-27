export class EducationDetails {
    constructor() {
        this.id = crypto.randomUUID();
        this.headerKey = "School";
        this.visible = true;
    }
}

export class WorkExpDetails {
    constructor() {
        this.id = crypto.randomUUID();
        this.headerKey = "Company";
        this.visible = true;
    }
}

export class Skill {
    constructor() {
        this.id = crypto.randomUUID();
        this.visible = true;
    }
}