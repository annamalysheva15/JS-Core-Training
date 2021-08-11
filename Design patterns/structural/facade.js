class Reports {
  constructor() {
    this.reports = []
  }
  reply(report) {}
  add(report) {
    this.reports.push(report)
    return this.reply(report)
  }
}
class MailingReport extends Reports {
  reply({ id, reporter, details }) {
    return `Report ${id}: ${reporter} (${details})`
  }
}
class PostReport extends Reports {
  reply({ id, reporter, details }) {
    return `Post ${id}: ${reporter} (${details})`
  }
}
// Facade
class ReportsRegistry {
  register(reporter, type, details) {
    const id = Date.now()
    let report;
    if (type === "mailing") {
      report = new MailingReport()
    } else {
      report = new PostReport()
    }
    return report.add({ id, reporter, details })
  }
}
const registry = new ReportsRegistry()
console.log(registry.register("Alex", "mailing", "rejected"))
console.log(registry.register("Mike", "post", "sent"))
