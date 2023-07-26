export class InterventionDate {

  static isInterventionDateGreatherThanToday(interventionDate: string) {
    const today = new Date();
    if (!interventionDate || interventionDate.length === 0) {
      return false;
    }
    const interventionDateDate = new Date(interventionDate);

    return interventionDateDate >= today;
  }
}
