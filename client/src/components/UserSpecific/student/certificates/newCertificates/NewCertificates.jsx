import Card from "./Card"


const NewCertificates = () => {
  return (
    <div className="d-flex p-5">
        <Card title = "Φοιτητικής Ιδιότητας"/>
        <Card title = "Φορολογικής Χρήσης" />
        <Card title = "Αναλυτική Βαθμολογία"/>
        <Card title = "Στρατολογική Χρήση" />
    </div>
  )
}

export default NewCertificates