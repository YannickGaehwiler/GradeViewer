using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GradeViewer.Modul
{
    public class gradesModul
    {
        private int id { get; set; }
        private float grade { get; set; }
        private int fk_id_subject { get; set; }
        private int fk_id_semester { get; set; }
        private int fk_id_person { get; set; }
        public void exchangeArray(Object[] row)
        {
            this.id = (int)row[0];
            this.grade = (float)row[1];
            this.fk_id_subject = (int)row[2];
            this.fk_id_semester = (int)row[3];
            this.fk_id_person = (int)row[4];
        }
    }
}
