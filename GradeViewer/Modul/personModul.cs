using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GradeViewer.Modul
{
    public class personModul
    {
        private int id { get; set; }
        private string firstname { get; set; }
        private string lastname { get; set; }
        private string username { get; set; }
        private string password { get; set; }
        private int fk_id_class { get; set; }
        private int fk_id_role { get; set; }
        public void exchangeArray(Object[] row)
        {
            this.id = (int)row[0];
            this.firstname = (string)row[1];
            this.lastname = (string)row[2];
            this.username = (string)row[3];
            this.password = (string)row[4];
            this.fk_id_class = (int)row[5];
            this.fk_id_role = (int)row[6];
        }

    }
}
