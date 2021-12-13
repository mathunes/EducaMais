package br.uff.ic.educamais.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "event")
@PrimaryKeyJoinColumn(name="id")
public class EventModel extends CollectionModel {

    @Column(name = "start_date", nullable = false)
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date startDade;

    @Column(name = "end_date", nullable = false)
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date endDate;

    public Date getStartDade() {
        return startDade;
    }

    public void setStartDade(Date startDade) {
        this.startDade = startDade;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
