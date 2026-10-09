// ==========================================
// MAJITRACK
// Water Business Management System
// Code Craft Tanzania
// ==========================================


// CONNECTION STATUS

const connectionText =
    document.getElementById("connectionText");

const statusDot =
    document.querySelector(".status-dot");

const dashboardConnection =
    document.getElementById("dashboardConnection");

const dashboardStatusDot =
    document.querySelector(".dashboard-status-dot");  


function updateConnectionStatus() {

    if (navigator.onLine) {

        connectionText.textContent = "Online";
        statusDot.style.background = "#16a34a";

        dashboardConnection.textContent = "Online";
        dashboardStatusDot.style.background = "#16a34a";

    } else {

        connectionText.textContent = "Offline";
        statusDot.style.background = "#dc2626";

        dashboardConnection.textContent = "Offline";
        dashboardStatusDot.style.background = "#dc2626";

    }

}

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

updateConnectionStatus();


// TEMPORARY LOGIN TEST

const loginForm =
    document.getElementById("loginForm");


const loginPage =
    document.querySelector(".login-page");

const dashboardPage =
    document.getElementById("dashboardPage");

const customersPage =
    document.getElementById("customersPage");

const customersBtn =
    document.getElementById("customersBtn");

const electricityBtn =
    document.getElementById("electricityBtn");

const electricityPage =
    document.getElementById("electricityPage");

const backFromElectricityBtn =
    document.getElementById("backFromElectricityBtn");

const addElectricityBtn =
    document.getElementById("addElectricityBtn");

const electricityModal =
    document.getElementById("electricityModal");

const closeElectricityForm =
    document.getElementById("closeElectricityForm");

const cancelElectricityBtn =
    document.getElementById("cancelElectricityBtn");

const electricityForm =
    document.getElementById("electricityForm");    

const totalElectricityUnitsDisplay =
    document.getElementById("totalElectricityUnits");

const totalElectricityCostDisplay =
    document.getElementById("totalElectricityCost");

const electricityPurchaseList =
    document.getElementById("electricityPurchaseList");

const electricityPurchaseCount =
    document.getElementById("electricityPurchaseCount");

const electricityUsageModal =
    document.getElementById("electricityUsageModal");

const recordElectricityUsageBtn =
    document.getElementById("recordElectricityUsageBtn");

const closeElectricityUsageForm =
    document.getElementById("closeElectricityUsageForm");

const cancelElectricityUsageBtn =
    document.getElementById("cancelElectricityUsageBtn");

const electricityUsageForm =
    document.getElementById("electricityUsageForm");

const electricityUnitsUsed =
    document.getElementById("electricityUnitsUsed");

const electricityUsageDate =
    document.getElementById("electricityUsageDate");

 const todayElectricityUsageDisplay =
    document.getElementById("todayElectricityUsage");

const totalElectricityUsedDisplay =
    document.getElementById("totalElectricityUsed");

const electricityUsageCount =
    document.getElementById("electricityUsageCount");

const electricityUsageList =
    document.getElementById("electricityUsageList");   

const backToDashboardBtn =
    document.getElementById("backToDashboardBtn");

const addCustomerBtn =
    document.getElementById("addCustomerBtn");

const creditSaleBtn =
    document.getElementById("creditSaleBtn");

const creditModal =
    document.getElementById("creditModal");

const customerModal =
    document.getElementById("customerModal");

const closeCustomerForm =
    document.getElementById("closeCustomerForm");

const cancelCustomerBtn =
    document.getElementById("cancelCustomerBtn");

const closeCreditForm =
    document.getElementById("closeCreditForm");

const cancelCreditBtn =
    document.getElementById("cancelCreditBtn");

   const receivePaymentBtn =
    document.getElementById("receivePaymentBtn");

const paymentModal =
    document.getElementById("paymentModal");

const closePaymentForm =
    document.getElementById("closePaymentForm");

const cancelPaymentBtn =
    document.getElementById("cancelPaymentBtn");

const paymentForm =
    document.getElementById("paymentForm");

const paymentCustomer =
    document.getElementById("paymentCustomer");

const paymentAmount =
    document.getElementById("paymentAmount"); 

const customerForm =
    document.getElementById("customerForm");

 const creditCustomer =
    document.getElementById("creditCustomer");

const creditSaleForm =
    document.getElementById("creditSaleForm");

const creditWaterSize =
    document.getElementById("creditWaterSize");

const creditQuantity =
    document.getElementById("creditQuantity");

const creditTotalLitres =
    document.getElementById("creditTotalLitres");

const creditTotalAmount =
    document.getElementById("creditTotalAmount");

const customerList =
    document.getElementById("customerList");

const customerCount =
    document.getElementById("customerCount");

const totalCustomersDisplay =
    document.getElementById("totalCustomers");

const customersOwingDisplay =
    document.getElementById("customersOwing");

const totalOutstandingDebtDisplay =
    document.getElementById("totalOutstandingDebt");

const attendantName =
    document.getElementById("attendantName");

    // ==========================================
// WATER USAGE NAVIGATION ELEMENTS
// ==========================================

const waterUsageBtn =
    document.getElementById("waterUsageBtn");

const waterUsagePage =
    document.getElementById("waterUsagePage");

const backFromWaterUsageBtn =
    document.getElementById("backFromWaterUsageBtn");

    // ==========================================
// WATER METER FORM ELEMENTS
// ==========================================

const recordWaterUsageBtn =
    document.getElementById("recordWaterUsageBtn");

const waterUsageModal =
    document.getElementById("waterUsageModal");

const closeWaterUsageForm =
    document.getElementById("closeWaterUsageForm");

const cancelWaterUsageBtn =
    document.getElementById("cancelWaterUsageBtn");

const waterUsageForm =
    document.getElementById("waterUsageForm");

const waterUsageDate =
    document.getElementById("waterUsageDate");

const waterOpeningReading =
    document.getElementById("waterOpeningReading");

const waterClosingReading =
    document.getElementById("waterClosingReading");

const waterOpeningPreview =
    document.getElementById("waterOpeningPreview");

const waterUsagePreview =
    document.getElementById("waterUsagePreview");

// ==========================================
// OWNER & SETTINGS ELEMENTS
// ==========================================

const ownerPage =
    document.getElementById("ownerPage");

const ownerSettingsPage =
    document.getElementById("ownerSettingsPage");

const ownerSettingsBtn =
    document.getElementById("ownerSettingsBtn");

const backFromOwnerBtn =
    document.getElementById("backFromOwnerBtn");

const backFromSettingsBtn =
    document.getElementById("backFromSettingsBtn");

const resetBusinessBtn =
    document.getElementById("resetBusinessBtn");

const exportBusinessBtn =
    document.getElementById("exportBusinessBtn");

    // RESTORE BUSINESS DATA ELEMENTS

const restoreBusinessBtn =
    document.getElementById("restoreBusinessBtn");

const restoreBusinessFile =
    document.getElementById("restoreBusinessFile");

const resetDataModal =
    document.getElementById("resetDataModal");

const resetConfirmationInput =
    document.getElementById("resetConfirmationInput");

const cancelResetBtn =
    document.getElementById("cancelResetBtn");

const confirmResetBtn =
    document.getElementById("confirmResetBtn");

    // ==========================================
// OWNER DASHBOARD SUMMARY ELEMENTS
// ==========================================

const ownerTotalSales =
    document.getElementById("ownerTotalSales");

const ownerCashReceived =
    document.getElementById("ownerCashReceived");

const ownerCreditSales =
    document.getElementById("ownerCreditSales");

const ownerOutstandingDebt =
    document.getElementById("ownerOutstandingDebt");

const ownerElectricityCost =
    document.getElementById("ownerElectricityCost");

const ownerOperatingBalance =
    document.getElementById("ownerOperatingBalance");

// ==========================================
// OWNER WATER USAGE ELEMENTS
// ==========================================

const ownerTodayWaterUsage =
    document.getElementById("ownerTodayWaterUsage");

const ownerTotalWaterUsage =
    document.getElementById("ownerTotalWaterUsage");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

const password =
    document.getElementById("password").value;

    loginPage.style.display = "none";

    if (username.toLowerCase() === "owner") {

    dashboardPage.style.display = "none";
    ownerPage.style.display = "block";

    updateOwnerDashboard();

} else {

        ownerPage.style.display = "none";
        dashboardPage.style.display = "block";

        attendantName.textContent = username;
    }

});

// ==========================================
// WATER USAGE PAGE NAVIGATION
// ==========================================

waterUsageBtn.addEventListener("click", function() {

    dashboardPage.style.display = "none";

    waterUsagePage.style.display = "block";

    updateWaterUsageDisplay();
    displayWaterUsageHistory();

});


backFromWaterUsageBtn.addEventListener("click", function() {

    waterUsagePage.style.display = "none";

    dashboardPage.style.display = "block";

});

// ==========================================
// WATER METER FORM NAVIGATION
// ==========================================

recordWaterUsageBtn.addEventListener("click", function() {

    waterUsageForm.reset();

    editingWaterUsageId = null;

    const today = new Date();

    const localDate =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    waterUsageDate.value = localDate;

    waterOpeningPreview.textContent = "0";
    waterUsagePreview.textContent = "0 Units";

    waterUsageModal.style.display = "flex";

});


closeWaterUsageForm.addEventListener("click", function() {

    waterUsageModal.style.display = "none";

});


cancelWaterUsageBtn.addEventListener("click", function() {

    waterUsageModal.style.display = "none";

});

// ==========================================
// CALCULATE DAILY WATER USAGE
// ==========================================

function updateWaterUsagePreview() {

    const opening =
        Number(waterOpeningReading.value);

    const closing =
        Number(waterClosingReading.value);

    const openingEntered =
        waterOpeningReading.value !== "";

    const closingEntered =
        waterClosingReading.value !== "";

    waterOpeningPreview.textContent =
        openingEntered
            ? opening.toLocaleString()
            : "0";

    if (!openingEntered || !closingEntered) {

        waterUsagePreview.textContent = "0 Units";
        waterClosingReading.setCustomValidity("");

        return;
    }

    if (opening < 0 || closing < 0) {

        waterUsagePreview.textContent = "Invalid reading";
        waterClosingReading.setCustomValidity(
            "Meter readings cannot be negative."
        );

        return;
    }

    if (closing < opening) {

        waterUsagePreview.textContent = "Invalid reading";

        waterClosingReading.setCustomValidity(
            "Closing reading cannot be less than opening reading."
        );

        return;
    }

    waterClosingReading.setCustomValidity("");

    const unitsUsed = closing - opening;

    waterUsagePreview.textContent =
        unitsUsed.toLocaleString() + " Units";

}


// Update automatically while typing

waterOpeningReading.addEventListener(
    "input",
    updateWaterUsagePreview
);

waterClosingReading.addEventListener(
    "input",
    updateWaterUsagePreview
);

// ==========================================
// SAVE DAILY WATER METER READING
// ==========================================

waterUsageForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const date = waterUsageDate.value;

    const opening =
        Number(waterOpeningReading.value);

    const closing =
        Number(waterClosingReading.value);

    if (
        !date ||
        waterOpeningReading.value === "" ||
        waterClosingReading.value === "" ||
        !Number.isFinite(opening) ||
        !Number.isFinite(closing) ||
        opening < 0 ||
        closing < opening
    ) {
        alert("Please enter valid opening and closing readings.");
        return;
    }

    const existingRecord = waterUsageRecords.find(function(record) {

    return record.date === date &&
        record.id !== editingWaterUsageId;

});

if (existingRecord) {

    alert("A water meter reading already exists for this date.");
    return;

}

if (editingWaterUsageId !== null) {

    const recordToEdit = waterUsageRecords.find(function(record) {
        return record.id === editingWaterUsageId;
    });

    if (!recordToEdit) {
        alert("The original water meter record could not be found.");
        return;
    }

    recordToEdit.date = date;
    recordToEdit.openingReading = opening;
    recordToEdit.closingReading = closing;
    recordToEdit.unitsUsed = closing - opening;

    localStorage.setItem(
        "waterUsageRecords",
        JSON.stringify(waterUsageRecords)
    );

    editingWaterUsageId = null;

    waterUsageForm.reset();
    waterUsageModal.style.display = "none";

    updateWaterUsageDisplay();
    displayWaterUsageHistory();

    alert("Water meter reading updated successfully.");

    return;
}

    const unitsUsed = closing - opening;

    const record = {
        id:
            "water-" +
            Date.now() +
            "-" +
            Math.random().toString(16).slice(2),

        date: date,

        openingReading: opening,
        closingReading: closing,
        unitsUsed: unitsUsed,

        attendant: attendantName.textContent,

        createdAt: new Date().toISOString(),

        syncStatus: "pending"
    };

    waterUsageRecords.push(record);

    localStorage.setItem(
        "waterUsageRecords",
        JSON.stringify(waterUsageRecords)
    );

    waterUsageForm.reset();

    waterUsageModal.style.display = "none";

    updateWaterUsageDisplay();
    displayWaterUsageHistory();

    alert("Water meter reading saved successfully.");

});

// ==========================================
// DISPLAY WATER METER USAGE
// ==========================================

function updateWaterUsageDisplay() {

    const today = new Date();

    const localDate =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    const todayRecord = waterUsageRecords.find(function(record) {
        return record.date === localDate;
    });

    const todayUnits =
        todayRecord
            ? Number(todayRecord.unitsUsed) || 0
            : 0;

    let totalUnits = 0;

    waterUsageRecords.forEach(function(record) {

        totalUnits += Number(record.unitsUsed) || 0;

    });

    document.getElementById("todayWaterUsage").textContent =
        todayUnits.toLocaleString() + " Units";

    document.getElementById("totalWaterUsage").textContent =
        totalUnits.toLocaleString() + " Units";

}

// ==========================================
// DISPLAY WATER METER HISTORY
// ==========================================

function displayWaterUsageHistory() {

    const waterUsageList =
        document.getElementById("waterUsageList");

    const waterUsageCount =
        document.getElementById("waterUsageCount");

    waterUsageList.innerHTML = "";

    waterUsageCount.textContent =
        waterUsageRecords.length +
        (waterUsageRecords.length === 1
            ? " record"
            : " records");

    if (waterUsageRecords.length === 0) {

        waterUsageList.innerHTML = `
            <p class="empty-message">
                No daily water usage recorded yet.
            </p>
        `;

        return;
    }

    const sortedRecords =
        waterUsageRecords.slice().sort(function(a, b) {
            return b.date.localeCompare(a.date);
        });

    sortedRecords.forEach(function(record) {

        const item = document.createElement("div");

        item.className = "customer-record";

        const date = new Date(record.date + "T00:00:00")
            .toLocaleDateString([], {
                day: "numeric",
                month: "short",
                year: "numeric"
            });

        item.innerHTML = `
            <div>
                <strong>${date}</strong>

                <p>
                    Opening: ${Number(record.openingReading).toLocaleString()}
                </p>

                <p>
                    Closing: ${Number(record.closingReading).toLocaleString()}
                </p>

                <p>
                    Recorded by ${record.attendant}
                </p>
            </div>

            <div class="electricity-usage-actions">

    <strong>
        ${Number(record.unitsUsed).toLocaleString()} Units
    </strong>

    <button
        type="button"
        class="edit-water-usage-btn"
        data-id="${record.id}"
    >
        Edit
    </button>

</div>
        `;

        waterUsageList.appendChild(item);

// ==========================================
// EDIT WATER METER READING
// ==========================================

const editWaterUsageBtn =
    item.querySelector(".edit-water-usage-btn");

editWaterUsageBtn.addEventListener("click", function() {

    editingWaterUsageId = record.id;

    waterUsageDate.value =
        record.date;

    waterOpeningReading.value =
        record.openingReading;

    waterClosingReading.value =
        record.closingReading;

    updateWaterUsagePreview();

    waterUsageModal.style.display = "flex";

});

    });

}

// ==========================================
// OWNER SETTINGS NAVIGATION
// ==========================================

ownerSettingsBtn.addEventListener("click", function() {

    ownerPage.style.display = "none";
    ownerSettingsPage.style.display = "block";

});

backFromSettingsBtn.addEventListener("click", function() {

    ownerSettingsPage.style.display = "none";
    ownerPage.style.display = "block";

});

// ==========================================
// PREPARE BUSINESS DATA RESTORATION
// ==========================================

function prepareBusinessDataRestore(backupData) {

    const keys = [
        "salesTransactions",
        "customers",
        "debtPayments",
        "electricityPurchases",
        "electricityUsageRecords",
        "waterUsageRecords"
    ];

    const preparedData = {};

    keys.forEach(function(key) {

        preparedData[key] =
            JSON.stringify(backupData[key]);

    });

    return preparedData;

}

// ==========================================
// RESTORE BUSINESS DATA WITH ROLLBACK
// ==========================================

function restoreBusinessDataSafely(backupData) {

    const preparedData =
        prepareBusinessDataRestore(backupData);

    const keys = Object.keys(preparedData);

    // Save current data before making changes

    const previousData = {};

    keys.forEach(function(key) {
        previousData[key] = localStorage.getItem(key);
    });

    try {

        // Write the restored collections

        keys.forEach(function(key) {
            localStorage.setItem(key, preparedData[key]);
        });

        // Verify that all writes succeeded

        const allSaved = keys.every(function(key) {
            return localStorage.getItem(key) === preparedData[key];
        });

        if (!allSaved) {
            throw new Error("Backup verification failed.");
        }

        return true;

    } catch (error) {

        // Attempt to recover the original data

        let rollbackSucceeded = true;

        keys.forEach(function(key) {

            try {

                if (previousData[key] === null) {
                    localStorage.removeItem(key);
                } else {
                    localStorage.setItem(
                        key,
                        previousData[key]
                    );
                }

            } catch (rollbackError) {

                rollbackSucceeded = false;
                console.error(
                    "Rollback failed for " + key,
                    rollbackError
                );

            }

        });

        console.error("Restoration failed:", error);

        if (!rollbackSucceeded) {
            alert(
                "CRITICAL: Restoration failed and some original " +
                "records could not be recovered automatically.\n\n" +
                "Do not enter new business records. " +
                "Keep your downloaded backup and contact support."
            );
        } else {
            alert(
                "Restoration failed.\n\n" +
                "The application attempted to recover " +
                "the original business records."
            );
        }

        return false;

    }

}

// ==========================================
// RESTORE BUSINESS DATA FILE PICKER
// ==========================================

restoreBusinessBtn.addEventListener("click", function() {

    restoreBusinessFile.value = "";

    restoreBusinessFile.click();

});

// ==========================================
// VALIDATE RESTORE BACKUP FILE
// ==========================================

restoreBusinessFile.addEventListener("change", async function() {

    const selectedFile = restoreBusinessFile.files[0];

    if (!selectedFile) {
        return;
    }

    let backup;

    try {

        const fileText = await selectedFile.text();

        backup = JSON.parse(fileText);

    } catch (error) {

        alert("Invalid file. Please select a valid JSON backup.");
        return;

    }

    // Verify MajiTrack backup identity

    if (
        !backup ||
        typeof backup !== "object" ||
        Array.isArray(backup) ||
        backup.app !== "MajiTrack" ||
        backup.version !== 1 ||
        !backup.data ||
        typeof backup.data !== "object" ||
        Array.isArray(backup.data)
    ) {

        alert("This is not a supported MajiTrack backup.");
        return;

    }

    // Verify all six business data collections

    const requiredCollections = [
        "salesTransactions",
        "customers",
        "debtPayments",
        "electricityPurchases",
        "electricityUsageRecords",
        "waterUsageRecords"
    ];

    const validCollections = requiredCollections.every(function(key) {

        return Array.isArray(backup.data[key]);

    });

    if (!validCollections) {

        alert(
            "Backup validation failed. " +
            "One or more business data collections are missing or invalid."
        );

        return;

    }

// ==========================================
// VALIDATE INDIVIDUAL BACKUP RECORDS
// ==========================================

const validRecordStructure = requiredCollections.every(function(key) {

    return backup.data[key].every(function(record) {

        return (
            record !== null &&
            typeof record === "object" &&
            !Array.isArray(record)
        );

    });

});

if (!validRecordStructure) {

// ==========================================
// VALIDATE BACKUP RECORD FIELDS
// ==========================================

const isValidNumber = function(value) {
    return typeof value === "number" &&
           Number.isFinite(value) &&
           value >= 0;
};

const hasValidId = function(record) {
    return typeof record.id === "string" &&
           record.id.trim() !== "";
};

const validators = {

    salesTransactions: function(record) {
        return hasValidId(record) &&
            [10, 20].includes(record.waterSize) &&
            Number.isInteger(record.quantity) &&
            record.quantity > 0 &&
            isValidNumber(record.unitPrice) &&
            isValidNumber(record.totalAmount) &&
            record.totalAmount ===
                record.quantity * record.unitPrice &&
            ["cash", "credit"].includes(record.paymentType) &&
            (record.paymentType !== "credit" ||
                (typeof record.customerId === "string" &&
                 record.customerId.trim() !== ""));
    },

    customers: function(record) {
        return hasValidId(record) &&
            typeof record.name === "string" &&
            record.name.trim() !== "" &&
            typeof record.phone === "string";
    },

    debtPayments: function(record) {
        return hasValidId(record) &&
            typeof record.customerId === "string" &&
            record.customerId.trim() !== "" &&
            isValidNumber(record.amount) &&
            record.amount > 0;
    },

    electricityPurchases: function(record) {
        return hasValidId(record) &&
            isValidNumber(record.units) &&
            isValidNumber(record.amount);
    },

    electricityUsageRecords: function(record) {
        return hasValidId(record) &&
            typeof record.date === "string" &&
            /^\d{4}-\d{2}-\d{2}$/.test(record.date) &&
            isValidNumber(record.unitsUsed);
    },

    waterUsageRecords: function(record) {
        return hasValidId(record) &&
            typeof record.date === "string" &&
            /^\d{4}-\d{2}-\d{2}$/.test(record.date) &&
            isValidNumber(record.openingReading) &&
            isValidNumber(record.closingReading) &&
            record.closingReading >= record.openingReading &&
            isValidNumber(record.unitsUsed) &&
            Math.abs(
                record.unitsUsed -
                (record.closingReading - record.openingReading)
            ) < 0.000001;
    }

};

const validRecordFields = requiredCollections.every(function(key) {

    return backup.data[key].every(function(record) {
        return validators[key](record);
    });

});

if (!validRecordFields) {

    alert(
        "Backup validation failed.\n\n" +
        "One or more records contain missing, invalid, " +
        "or inconsistent values."
    );

    return;

}



    alert(
        "Backup validation failed.\n\n" +
        "One or more collections contain invalid records."
    );

    return;

}

// ==========================================
// VALIDATE BACKUP CUSTOMER REFERENCES
// ==========================================

const customerIds = new Set(
    backup.data.customers.map(function(customer) {
        return customer.id;
    })
);

const validCreditCustomers =
    backup.data.salesTransactions.every(function(sale) {

        if (sale.paymentType !== "credit") {
            return true;
        }

        return customerIds.has(sale.customerId);

    });

const validPaymentCustomers =
    backup.data.debtPayments.every(function(payment) {

        return customerIds.has(payment.customerId);

    });

if (!validCreditCustomers || !validPaymentCustomers) {

    alert(
        "Backup validation failed.\n\n" +
        "Some credit sales or debt payments reference " +
        "customers that do not exist in the backup."
    );

    return;

}

// ==========================================
// VALIDATE DUPLICATE BACKUP RECORDS
// ==========================================

// Check duplicate IDs within each collection

const uniqueRecordIds = requiredCollections.every(function(key) {

    const ids = backup.data[key].map(function(record) {
        return record.id;
    });

    return new Set(ids).size === ids.length;

});

if (!uniqueRecordIds) {

    alert(
        "Backup validation failed.\n\n" +
        "Duplicate record IDs were found."
    );

    return;

}

// Check duplicate daily electricity usage dates

const electricityDates =
    backup.data.electricityUsageRecords.map(function(record) {
        return record.date;
    });

const uniqueElectricityDates =
    new Set(electricityDates).size === electricityDates.length;

// Check duplicate daily water meter dates

const waterDates =
    backup.data.waterUsageRecords.map(function(record) {
        return record.date;
    });

const uniqueWaterDates =
    new Set(waterDates).size === waterDates.length;

if (!uniqueElectricityDates || !uniqueWaterDates) {

    alert(
        "Backup validation failed.\n\n" +
        "Multiple daily meter records were found " +
        "for the same date."
    );

    return;

}

    alert(
        "Backup file validated successfully!\n\n" +
        "File: " + selectedFile.name + "\n" +
        "All six business data collections are present.\n\n" +
        "No existing records have been changed."
    );

// ==========================================
// CONFIRM BUSINESS DATA RESTORATION
// ==========================================

const restoreConfirmed = confirm(
    "RESTORE BUSINESS DATA\n\n" +
    "This will replace ALL current business records " +
    "with the records from the selected backup.\n\n" +
    "Any records created after this backup may be lost.\n\n" +
    "Have you exported your current business data?\n\n" +
    "Click OK to continue or Cancel to keep your data."
);

if (!restoreConfirmed) {

    alert(
        "Restoration cancelled.\n\n" +
        "Your existing business records are unchanged."
    );

    return;

}

// ==========================================
// EXECUTE CONFIRMED BUSINESS DATA RESTORE
// ==========================================

const restoreSucceeded =
    restoreBusinessDataSafely(backup.data);

if (!restoreSucceeded) {
    return;
}

alert(
    "Business data restored successfully!\n\n" +
    "MajiTrack will now reload to display " +
    "the restored records."
);

window.location.reload();

});

// ==========================================
// EXPORT BUSINESS DATA
// ==========================================

exportBusinessBtn.addEventListener("click", function() {

    const backup = {

        app: "MajiTrack",
        version: 1,
        exportedAt: new Date().toISOString(),

        data: {
            salesTransactions: salesTransactions,
            customers: customers,
            debtPayments: debtPayments,
            electricityPurchases: electricityPurchases,
            electricityUsageRecords: electricityUsageRecords,
            waterUsageRecords: waterUsageRecords
        }

    };

    const backupText =
        JSON.stringify(backup, null, 2);

    const file =
        new Blob(
            [backupText],
            { type: "application/json" }
        );

    const downloadUrl =
        URL.createObjectURL(file);

    const downloadLink =
        document.createElement("a");

    const today = new Date();

    const date =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    downloadLink.href = downloadUrl;

    downloadLink.download =
        "MajiTrack-Backup-" + date + ".json";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    downloadLink.remove();

    setTimeout(function() {
        URL.revokeObjectURL(downloadUrl);
    }, 1000);

});

// ==========================================
// RESET BUSINESS DATA CONFIRMATION
// ==========================================

resetBusinessBtn.addEventListener("click", function() {

    resetConfirmationInput.value = "";
    confirmResetBtn.disabled = true;

    resetDataModal.style.display = "flex";

});

confirmResetBtn.addEventListener("click", function() {

    if (resetConfirmationInput.value !== "RESET") {
        return;
    }

    localStorage.removeItem("salesTransactions");
    localStorage.removeItem("customers");
    localStorage.removeItem("debtPayments");
    localStorage.removeItem("electricityPurchases");
    localStorage.removeItem("electricityUsageRecords");
    localStorage.removeItem("waterUsageRecords");

    alert("Business data has been reset successfully.");

    window.location.reload();

});


cancelResetBtn.addEventListener("click", function() {

    resetDataModal.style.display = "none";

    resetConfirmationInput.value = "";
    confirmResetBtn.disabled = true;

});


resetConfirmationInput.addEventListener("input", function() {

    if (resetConfirmationInput.value === "RESET") {

        confirmResetBtn.disabled = false;

    } else {

        confirmResetBtn.disabled = true;

    }

});

// ==========================================
// CUSTOMERS SCREEN NAVIGATION
// ==========================================

customersBtn.addEventListener("click", function() {

    dashboardPage.style.display = "none";
    customersPage.style.display = "block";

});

electricityBtn.addEventListener("click", function() {
    dashboardPage.style.display = "none";
    electricityPage.style.display = "block";
});


backToDashboardBtn.addEventListener("click", function() {

    customersPage.style.display = "none";
    dashboardPage.style.display = "block";

});

backFromElectricityBtn.addEventListener("click", function() {
    electricityPage.style.display = "none";
    dashboardPage.style.display = "block";
});

addElectricityBtn.addEventListener("click", function() {
    electricityModal.style.display = "flex";
});



closeElectricityForm.addEventListener("click", function() {
    electricityModal.style.display = "none";
});

cancelElectricityBtn.addEventListener("click", function() {
    electricityModal.style.display = "none";
});

electricityForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const units =
        Number(
            document.getElementById("electricityUnits").value
        );

    const amount =
        Number(
            document.getElementById("electricityAmount").value
        );

    if (units <= 0 || amount <= 0) {
        return;
    }

    const purchase = {
        id:
            "electricity-" +
            Date.now() +
            "-" +
            Math.random().toString(16).slice(2),

        units: units,
        amount: amount,

        attendant:
            attendantName.textContent,

        createdAt:
            new Date().toISOString(),

        syncStatus: "pending"
    };

electricityPurchases.push(purchase);

saveElectricityPurchases();

updateElectricityDisplay();

displayElectricityPurchases();

electricityForm.reset();

editingElectricityUsageId = null;

    electricityModal.style.display = "none";
});

recordElectricityUsageBtn.addEventListener("click", function() {

    editingElectricityUsageId = null;

    const today = new Date();

    const localDate =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    electricityUsageDate.value = localDate;

    electricityUsageModal.style.display = "flex";

});



closeElectricityUsageForm.addEventListener("click", function() {

    electricityUsageModal.style.display = "none";

});


cancelElectricityUsageBtn.addEventListener("click", function() {

    electricityUsageModal.style.display = "none";

});

electricityUsageForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const unitsUsed =
        Number(electricityUnitsUsed.value);

    const usageDate =
        electricityUsageDate.value;


    if (!unitsUsed || unitsUsed <= 0 || !usageDate) {
        return;
    }


    const dateAlreadyRecorded =
    electricityUsageRecords.some(function(record) {

        return record.date === usageDate &&
            record.id !== editingElectricityUsageId;

    });


    if (dateAlreadyRecorded) {

        alert(
            "Electricity usage has already been recorded for this date."
        );

        return;
    }


    if (editingElectricityUsageId) {

    const recordToEdit =
        electricityUsageRecords.find(function(record) {

            return record.id === editingElectricityUsageId;

        });


    if (recordToEdit) {

        recordToEdit.unitsUsed =
            unitsUsed;

        recordToEdit.date =
            usageDate;

        recordToEdit.updatedAt =
            new Date().toISOString();

        recordToEdit.syncStatus =
            "pending";

    }

} else {

    const usageRecord = {

        id:
            "usage-" +
            Date.now() +
            "-" +
            Math.random().toString(16).slice(2),

        unitsUsed: unitsUsed,

        date: usageDate,

        attendant:
            attendantName.textContent,

        createdAt:
            new Date().toISOString(),

        syncStatus: "pending"

    };


    electricityUsageRecords.push(usageRecord);

}

saveElectricityUsageRecords();

updateElectricityUsageDisplay();
displayElectricityUsageRecords();

electricityUsageForm.reset();

editingElectricityUsageId = null;

electricityUsageModal.style.display = "none";

});


addCustomerBtn.addEventListener("click", function() {

    editingCustomerId = null;

    customerModal.style.display = "flex";

});

closeCustomerForm.addEventListener("click", function() {
    customerModal.style.display = "none";
});

cancelCustomerBtn.addEventListener("click", function() {
    customerModal.style.display = "none";
});

creditSaleBtn.addEventListener("click", function() {
    creditModal.style.display = "flex";

});

closeCreditForm.addEventListener("click", function() {
    creditModal.style.display = "none";
});

cancelCreditBtn.addEventListener("click", function() {
    creditModal.style.display = "none";
});

receivePaymentBtn.addEventListener("click", function() {

    updatePaymentCustomerDropdown();

    paymentModal.style.display = "flex";

});

closePaymentForm.addEventListener("click", function() {
    paymentModal.style.display = "none";
});

cancelPaymentBtn.addEventListener("click", function() {
    paymentModal.style.display = "none";
});



// ==========================================
// CUSTOMERS
// ==========================================

let customers =
    JSON.parse(localStorage.getItem("customers")) || [];

let editingCustomerId = null;

function saveCustomers() {

    localStorage.setItem(
        "customers",
        JSON.stringify(customers)
    );

}

// ==========================================
// DEBT PAYMENTS
// ==========================================

let debtPayments =
    JSON.parse(localStorage.getItem("debtPayments")) || [];


function saveDebtPayments() {

    localStorage.setItem(
        "debtPayments",
        JSON.stringify(debtPayments)
    );

}

let electricityPurchases =
    JSON.parse(localStorage.getItem("electricityPurchases")) || [];

function saveElectricityPurchases() {
    localStorage.setItem(
        "electricityPurchases",
        JSON.stringify(electricityPurchases)
    );
}

let electricityUsageRecords =
    JSON.parse(localStorage.getItem("electricityUsageRecords")) || [];

// ==========================================
// WATER METER USAGE STORAGE
// ==========================================

let waterUsageRecords =
    JSON.parse(
        localStorage.getItem("waterUsageRecords")
    ) || [];

let editingElectricityUsageId = null;

function saveElectricityUsageRecords() {

    localStorage.setItem(
        "electricityUsageRecords",
        JSON.stringify(electricityUsageRecords)
    );

}

function updateElectricityDisplay() {

    let totalUnits = 0;
    let totalCost = 0;

    electricityPurchases.forEach(function(purchase) {
        totalUnits += purchase.units;
        totalCost += purchase.amount;
    });

    totalElectricityUnitsDisplay.textContent =
        totalUnits.toLocaleString();

    totalElectricityCostDisplay.textContent =
        "TZS " + totalCost.toLocaleString();
}

function updateElectricityUsageDisplay() {

    let totalUsed = 0;
    let todayUsed = 0;


    const today = new Date();

    const localDate =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");


    electricityUsageRecords.forEach(function(record) {

        const units =
            Number(record.unitsUsed) || 0;

        totalUsed += units;


        if (record.date === localDate) {

            todayUsed += units;

        }

    });


    todayElectricityUsageDisplay.textContent =
        todayUsed.toLocaleString() + " Units";

    totalElectricityUsedDisplay.textContent =
        totalUsed.toLocaleString() + " Units";

}

function displayElectricityUsageRecords() {

    electricityUsageList.innerHTML = "";

    electricityUsageCount.textContent =
        electricityUsageRecords.length +
        (electricityUsageRecords.length === 1
            ? " day recorded"
            : " days recorded");


    if (electricityUsageRecords.length === 0) {

        electricityUsageList.innerHTML = `
            <p class="empty-message">
                No daily electricity usage recorded yet.
            </p>
        `;

        return;
    }


    const recentUsage =
        electricityUsageRecords
            .slice()
            .sort(function(a, b) {
                return new Date(b.date) - new Date(a.date);
            });


    recentUsage.forEach(function(record) {

        const units =
            Number(record.unitsUsed) || 0;

        const date =
            new Date(record.date + "T00:00:00")
                .toLocaleDateString([], {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                });


        const usageItem =
            document.createElement("div");

        usageItem.className = "customer-record";


        usageItem.innerHTML = `
    <div>
        <strong>${date}</strong>

        <p>
            Recorded by ${record.attendant}
        </p>
    </div>

    <div class="electricity-usage-actions">

        <strong>
            ${units.toLocaleString()} Units
        </strong>

        <button
            type="button"
            class="edit-usage-btn"
            data-id="${record.id}"
        >
            Edit
        </button>

    </div>
`;


        electricityUsageList.appendChild(usageItem);

        const editUsageBtn =
    usageItem.querySelector(".edit-usage-btn");

editUsageBtn.addEventListener("click", function() {

    editingElectricityUsageId = record.id;

    electricityUnitsUsed.value =
        record.unitsUsed;

    electricityUsageDate.value =
        record.date;

    electricityUsageModal.style.display =
        "flex";

});

    });

}

function displayElectricityPurchases() {

    electricityPurchaseList.innerHTML = "";

    electricityPurchaseCount.textContent =
        electricityPurchases.length +
        (electricityPurchases.length === 1
            ? " purchase"
            : " purchases");

    if (electricityPurchases.length === 0) {

        electricityPurchaseList.innerHTML = `
            <p class="empty-message">
                No electricity purchases recorded yet.
            </p>
        `;

        return;
    }

    const recentPurchases =
        electricityPurchases.slice().reverse();

    recentPurchases.forEach(function(purchase) {

        const purchaseDate =
            new Date(purchase.createdAt)
                .toLocaleString();

        const record =
            document.createElement("div");

        record.className = "customer-record";

        record.innerHTML = `
            <div>
                <strong>
                    ${purchase.units.toLocaleString()} Units
                </strong>

                <span>
                    ${purchaseDate}
                </span>
            </div>

            <div class="customer-debt">
                TZS ${purchase.amount.toLocaleString()}
            </div>
        `;

        electricityPurchaseList.appendChild(record);
    });
}

function calculateCustomerDebt(customerId) {

    let creditTotal = 0;
    let paymentsTotal = 0;


    salesTransactions.forEach(function(sale) {

        if (
            sale.paymentType === "credit" &&
            sale.customerId === customerId
        ) {
            creditTotal += sale.totalAmount;
        }

    });


    debtPayments.forEach(function(payment) {

        if (payment.customerId === customerId) {
            paymentsTotal += payment.amount;
        }

    });


    return creditTotal - paymentsTotal;
}

function displayCustomers() {

    customerList.innerHTML = "";

    totalCustomersDisplay.textContent =
        customers.length;

    customerCount.textContent =
        customers.length + " customers";

        let customersOwing = 0;
let totalOutstandingDebt = 0;

customers.forEach(function(customer) {

    const debt =
        calculateCustomerDebt(customer.id);

    if (debt > 0) {
        customersOwing++;
    }

    totalOutstandingDebt += debt;

});

customersOwingDisplay.textContent =
    customersOwing;

totalOutstandingDebtDisplay.textContent =
    "TZS " + totalOutstandingDebt.toLocaleString();

    if (customers.length === 0) {

        customerList.innerHTML = `
            <p class="empty-message">
                No customers added yet.
            </p>
        `;

        return;
    }


    customers.forEach(function(customer) {

        const customerDebt =
    calculateCustomerDebt(customer.id);

        const record =
            document.createElement("div");

        record.className = "customer-record";

        record.innerHTML = `
    <div>
        <strong>${customer.name}</strong>

        <span>
            ${customer.phone || "No phone number"}
        </span>
    </div>

    <div class="customer-record-right">

        <div class="customer-debt">
            TZS ${customerDebt.toLocaleString()}
        </div>

        <div class="customer-actions">

            <button
                type="button"
                class="edit-customer-btn"
                data-id="${customer.id}"
            >
                Edit
            </button>

            <button
                type="button"
                class="delete-customer-btn"
                data-id="${customer.id}"
            >
                Delete
            </button>

        </div>

    </div>
`;

        customerList.appendChild(record);

        const editCustomerBtn =
    record.querySelector(".edit-customer-btn");

editCustomerBtn.addEventListener("click", function() {

    editingCustomerId = customer.id;

    customerName.value =
        customer.name;

    customerPhone.value =
        customer.phone || "";

    customerModal.style.display =
        "flex";

});

const deleteCustomerBtn =
    record.querySelector(".delete-customer-btn");

deleteCustomerBtn.addEventListener("click", function() {

    const hasSalesHistory =
        salesTransactions.some(function(sale) {

            return sale.customerId === customer.id;

        });


    const hasPaymentHistory =
        debtPayments.some(function(payment) {

            return payment.customerId === customer.id;

        });


    if (hasSalesHistory || hasPaymentHistory) {

        alert(
            "This customer cannot be deleted because they have transaction history."
        );

        return;
    }


    const confirmed =
        confirm(
            "Delete " +
            customer.name +
            "? This action cannot be undone."
        );


    if (!confirmed) {
        return;
    }


    customers =
        customers.filter(function(item) {

            return item.id !== customer.id;

        });


    saveCustomers();

    displayCustomers();

    updateCreditCustomerDropdown();

});

});

}

function updateCreditCustomerDropdown() {

    creditCustomer.innerHTML = `
        <option value="">
            Select customer
        </option>
    `;


    customers.forEach(function(customer) {

        const option =
            document.createElement("option");

        option.value = customer.id;

        option.textContent =
            customer.name;

        creditCustomer.appendChild(option);

    });

}

function updatePaymentCustomerDropdown() {

    paymentCustomer.innerHTML = `
        <option value="">
            Select customer
        </option>
    `;


    customers.forEach(function(customer) {

        const debt =
            calculateCustomerDebt(customer.id);


        if (debt > 0) {

            const option =
                document.createElement("option");

            option.value = customer.id;

            option.textContent =
                customer.name +
                " — Owes TZS " +
                debt.toLocaleString();

            paymentCustomer.appendChild(option);

        }

    });

}

paymentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const customerId =
        paymentCustomer.value;

    const amount =
        Number(paymentAmount.value);


    if (!customerId || amount <= 0) {
        return;
    }


    const currentDebt =
        calculateCustomerDebt(customerId);


    if (amount > currentDebt) {

        alert(
            "Payment cannot be greater than the customer's outstanding debt."
        );

        return;
    }


    const payment = {

        id:
            "payment-" +
            Date.now() +
            "-" +
            Math.random().toString(16).slice(2),

        customerId: customerId,

        amount: amount,

        attendant:
            attendantName.textContent,

        createdAt:
            new Date().toISOString(),

        syncStatus: "pending"

    };


    debtPayments.push(payment);

    saveDebtPayments();

    updateSalesDisplay();

    displayCustomers();

    paymentForm.reset();

    paymentModal.style.display = "none";

});

customerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const customerName =
        document.getElementById("customerName").value.trim();

    const customerPhone =
        document.getElementById("customerPhone").value.trim();


    if (!customerName) {
        return;
    }


    if (editingCustomerId) {

        const customerToEdit =
            customers.find(function(customer) {

                return customer.id === editingCustomerId;

            });


        if (customerToEdit) {

            customerToEdit.name =
                customerName;

            customerToEdit.phone =
                customerPhone;

            customerToEdit.updatedAt =
                new Date().toISOString();

            customerToEdit.syncStatus =
                "pending";

        }

    } else {

        const customer = {

            id:
                "customer-" +
                Date.now() +
                "-" +
                Math.random().toString(16).slice(2),

            name: customerName,

            phone: customerPhone,

            createdAt:
                new Date().toISOString(),

            syncStatus: "pending"

        };


        customers.push(customer);

    }


    saveCustomers();

    displayCustomers();

    updateCreditCustomerDropdown();

    customerForm.reset();

    editingCustomerId = null;

    customerModal.style.display = "none";

});

// LOGOUT

const logoutBtn =
    document.getElementById("logoutBtn");


logoutBtn.addEventListener("click", function() {

    dashboardPage.style.display = "none";
    loginPage.style.display = "flex";

    loginForm.reset();

});
// ==========================================
// CASH SALES
// ==========================================

let salesTransactions =
    JSON.parse(localStorage.getItem("salesTransactions")) || [];


const totalSalesDisplay =
    document.getElementById("totalSales");

const creditSalesDisplay =
    document.getElementById("creditSales"); 
    
const cashReceivedDisplay =
    document.getElementById("cashReceived");  

 const dashboardOutstandingDebtDisplay =
    document.getElementById("dashboardOutstandingDebt");   

const tenLitresDisplay =
    document.getElementById("tenLitresCount");

const twentyLitresDisplay =
    document.getElementById("twentyLitresCount");

const totalLitresDisplay =
    document.getElementById("totalLitres");

const sell10Btn =
    document.getElementById("sell10Btn");

const sell20Btn =
    document.getElementById("sell20Btn");

  const quickSaleModal =
    document.getElementById("quickSaleModal");

const closeQuickSale =
    document.getElementById("closeQuickSale");

const cancelQuickSale =
    document.getElementById("cancelQuickSale");

const recordQuickSale =
    document.getElementById("recordQuickSale");

const saleQuantity =
    document.getElementById("saleQuantity");

const quickSaleDescription =
    document.getElementById("quickSaleDescription");

const quickSaleLitres =
    document.getElementById("quickSaleLitres");

const quickSaleAmount =
    document.getElementById("quickSaleAmount");
    
    let selectedWaterSize = 10;

const recentSalesList =
    document.getElementById("recentSalesList");

const transactionCount =
    document.getElementById("transactionCount");

// ==========================================
// UPDATE SALES DASHBOARD
// ==========================================

function updateSalesDisplay() {

    let totalSales = 0;
    let creditSales = 0;
    let cashSales = 0;
    let tenLitres = 0;
    let twentyLitres = 0;
    let totalLitres = 0;


    salesTransactions.forEach(function(sale) {

    const quantity = Number(sale.quantity) || 1;
    const waterSize = Number(sale.waterSize) || 0;
    const totalAmount =
        Number(sale.totalAmount) || (100 * quantity);

    totalSales += totalAmount;

    if (sale.paymentType === "credit") {
        creditSales += totalAmount;
    }

    if (sale.paymentType === "cash") {
        cashSales += totalAmount;
    }

    totalLitres +=
        waterSize * quantity;

    if (waterSize === 10) {
        tenLitres += quantity;
    }

    if (waterSize === 20) {
        twentyLitres += quantity;
    }

});

    let debtPaymentsReceived = 0;

debtPayments.forEach(function(payment) {
    debtPaymentsReceived += payment.amount;
});

const cashReceived =
    cashSales + debtPaymentsReceived;

  let outstandingDebt = 0;

customers.forEach(function(customer) {
    outstandingDebt +=
        calculateCustomerDebt(customer.id);
});  


    totalSalesDisplay.textContent =
        "TZS " + totalSales.toLocaleString();

        creditSalesDisplay.textContent =
    "TZS " + creditSales.toLocaleString();

    cashReceivedDisplay.textContent =
    "TZS " + cashReceived.toLocaleString();

    dashboardOutstandingDebtDisplay.textContent =
    "TZS " + outstandingDebt.toLocaleString();

    tenLitresDisplay.textContent =
        tenLitres;

    twentyLitresDisplay.textContent =
        twentyLitres;

    totalLitresDisplay.textContent =
        totalLitres.toLocaleString() + " L";

}

// ==========================================
// UPDATE OWNER DASHBOARD
// ==========================================

function updateOwnerDashboard() {

    let totalSales = 0;
    let creditSales = 0;
    let cashSales = 0;


    salesTransactions.forEach(function(sale) {

        const quantity =
            Number(sale.quantity) || 1;

        const totalAmount =
            Number(sale.totalAmount) || (100 * quantity);

        totalSales += totalAmount;

        if (sale.paymentType === "credit") {
            creditSales += totalAmount;
        }

        if (sale.paymentType === "cash") {
            cashSales += totalAmount;
        }

    });


    let debtPaymentsReceived = 0;

    debtPayments.forEach(function(payment) {

        debtPaymentsReceived +=
            Number(payment.amount) || 0;

    });


    const cashReceived =
        cashSales + debtPaymentsReceived;


    let outstandingDebt = 0;

    customers.forEach(function(customer) {

        outstandingDebt +=
            calculateCustomerDebt(customer.id);

    });


    ownerTotalSales.textContent =
        "TZS " + totalSales.toLocaleString();

    ownerCashReceived.textContent =
        "TZS " + cashReceived.toLocaleString();

    ownerCreditSales.textContent =
        "TZS " + creditSales.toLocaleString();

   ownerOutstandingDebt.textContent =
    "TZS " + outstandingDebt.toLocaleString();


    // ==========================================
    // ELECTRICITY COST
    // ==========================================

    let electricityCost = 0;

    electricityPurchases.forEach(function(purchase) {

        electricityCost +=
            Number(purchase.amount) || 0;

    });


    // ==========================================
    // OPERATING BALANCE
    // ==========================================

    const operatingBalance =
        cashReceived - electricityCost;


    ownerElectricityCost.textContent =
        "TZS " + electricityCost.toLocaleString();

    ownerOperatingBalance.textContent =
    "TZS " + operatingBalance.toLocaleString();


    // ==========================================
    // OWNER WATER USAGE SUMMARY
    // ==========================================

    const today = new Date();

    const localDate =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    const todayWaterRecord =
        waterUsageRecords.find(function(record) {
            return record.date === localDate;
        });

    const todayWaterUnits =
        todayWaterRecord
            ? Number(todayWaterRecord.unitsUsed) || 0
            : 0;

    let totalWaterUnits = 0;

    waterUsageRecords.forEach(function(record) {

        totalWaterUnits +=
            Number(record.unitsUsed) || 0;

    });

    ownerTodayWaterUsage.textContent =
        todayWaterUnits.toLocaleString() + " Units";

    ownerTotalWaterUsage.textContent =
        totalWaterUnits.toLocaleString() + " Units";

}

// ==========================================
// SAVE SALES
// ==========================================

function saveSalesTransactions() {

    localStorage.setItem(
        "salesTransactions",
        JSON.stringify(salesTransactions)
    );

}

// ==========================================
// DISPLAY RECENT SALES
// ==========================================

function displayRecentSales() {

    recentSalesList.innerHTML = "";

    transactionCount.textContent =
        salesTransactions.length + " transactions";


    if (salesTransactions.length === 0) {

        recentSalesList.innerHTML = `
            <p class="empty-message">
                No sales recorded yet.
            </p>
        `;

        return;
    }


    const recentSales =
        salesTransactions.slice(-5).reverse();


    recentSales.forEach(function(sale) {

        const quantity = Number(sale.quantity) || 1;
        const waterSize = Number(sale.waterSize) || 0;
        const totalAmount =
            Number(sale.totalAmount) || (100 * quantity);

        const saleTime =
            new Date(sale.createdAt)
                .toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                });


        const record =
            document.createElement("div");

        record.className = "sale-record";


        record.innerHTML = `

            <div class="sale-record-left">

                <div class="sale-size">
                  ${waterSize} L
                  × ${quantity}
                </div>
                
                <div class="sale-details">

                   <strong>
    ${sale.paymentType === "credit"
        ? "Credit Sale"
        : "Cash Sale"}
</strong>

<span>
    ${(waterSize * quantity).toLocaleString()} L total
    · ${saleTime}
</span>

                </div>

            </div>


            <div class="sale-amount">

                <strong>
                    TZS ${totalAmount.toLocaleString()}
                </strong>

                <div class="pending-sync">
                    ● Pending Sync
                </div>

            </div>

        `;


        recentSalesList.appendChild(record);

    });

}

    // ==========================================
// CREATE A SALE
// ==========================================

function createSale(waterSize, quantity) {

    const unitPrice = 100;

    const sale = {

        id:
            "sale-" +
            Date.now() +
            "-" +
            Math.random().toString(16).slice(2),

        waterSize: waterSize,

        quantity: quantity,

        unitPrice: unitPrice,

        totalAmount:
            unitPrice * quantity,

        paymentType: "cash",

        customerId: null,

        attendant:
            attendantName.textContent,

        createdAt:
            new Date().toISOString(),

        syncStatus: "pending"

    };


    salesTransactions.push(sale);

    saveSalesTransactions();

    updateSalesDisplay();

    displayRecentSales();

}

function createCreditSale(customerId, waterSize, quantity) {

    const unitPrice = 100;
    const sale = {

        id:
            "sale-" +
            Date.now() +
            "-" +
            Math.random().toString(16).slice(2),

        waterSize: waterSize,

        quantity: quantity,

        unitPrice: unitPrice,

        totalAmount:
            unitPrice * quantity,

        paymentType: "credit",

        customerId: customerId,

        attendant:
            attendantName.textContent,

        createdAt:
            new Date().toISOString(),

        syncStatus: "pending"

    };

    salesTransactions.push(sale);

    saveSalesTransactions();

    updateSalesDisplay();

    displayRecentSales();

    displayCustomers();
}

function updateCreditSaleSummary() {

    const waterSize =
        Number(creditWaterSize.value);

    let quantity =
        Number(creditQuantity.value);

    if (quantity < 1 || !quantity) {
        quantity = 1;
    }

    if (!waterSize) {
        creditTotalLitres.textContent = "0 L";
        creditTotalAmount.textContent = "TZS 0";
        return;
    }

    const totalLitres =
        waterSize * quantity;

    const totalAmount =
        100 * quantity;

    creditTotalLitres.textContent =
        totalLitres.toLocaleString() + " L";

    creditTotalAmount.textContent =
        "TZS " + totalAmount.toLocaleString();
}

creditWaterSize.addEventListener("change", function() {
    updateCreditSaleSummary();
});

creditQuantity.addEventListener("input", function() {
    updateCreditSaleSummary();
});

const creditQuantityButtons =
    document.querySelectorAll(
        ".credit-quantity-buttons button"
    );

creditQuantityButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const quantity =
            Number(button.dataset.quantity);

        creditQuantity.value = quantity;

        // Remove selected state from all credit quantity buttons
        creditQuantityButtons.forEach(function(item) {
            item.classList.remove("selected");
        });

        // Highlight the button that was clicked
        button.classList.add("selected");

        updateCreditSaleSummary();
    });

});

creditQuantity.addEventListener("input", function() {

    const typedQuantity =
        Number(creditQuantity.value);

    creditQuantityButtons.forEach(function(button) {

        const buttonQuantity =
            Number(button.dataset.quantity);

        if (buttonQuantity === typedQuantity) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }

    });

});

creditSaleForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const customerId =
        creditCustomer.value;

    const waterSize =
        Number(creditWaterSize.value);

        const quantity =
    Number(creditQuantity.value);

    if (!customerId || !waterSize || !quantity || quantity < 1) {
    return;
}



    createCreditSale(
    customerId,
    waterSize,
    quantity
);

    creditSaleForm.reset();

    creditQuantityButtons.forEach(function(button) {
    button.classList.remove("selected");
});

    creditModal.style.display = "none";

});


// ==========================================
// 10 L CASH SALE BUTTON
// ==========================================

sell10Btn.addEventListener("click", function() {

    selectedWaterSize = 10;

    saleQuantity.value = 1;

    quickQuantityButtons.forEach(function(button) {
    button.classList.remove("selected");
});

    quickSaleDescription.textContent =
        "10 L water — TZS 100 each";

    quickSaleLitres.textContent =
        "10 L";

    quickSaleAmount.textContent =
        "TZS 100";

    quickSaleModal.style.display = "flex";
    });

// ==========================================
// 20 L CASH SALE BUTTON
// ==========================================

sell20Btn.addEventListener("click", function() {

    selectedWaterSize = 20;

    saleQuantity.value = 1;

    quickQuantityButtons.forEach(function(button) {
    button.classList.remove("selected");
});

    quickSaleDescription.textContent =
        "20 L water — TZS 100 each";

    quickSaleLitres.textContent =
        "20 L";

    quickSaleAmount.textContent =
        "TZS 100";

    quickSaleModal.style.display = "flex";
});

closeQuickSale.addEventListener("click", function() {
    quickSaleModal.style.display = "none";
});

cancelQuickSale.addEventListener("click", function() {
    quickSaleModal.style.display = "none";
});

function updateQuickSaleSummary() {

    let quantity =
        Number(saleQuantity.value);

    if (quantity < 1 || !quantity) {
        quantity = 1;
    }

    const totalLitres =
        selectedWaterSize * quantity;

    const totalAmount =
        100 * quantity;

    quickSaleLitres.textContent =
        totalLitres.toLocaleString() + " L";

    quickSaleAmount.textContent =
        "TZS " + totalAmount.toLocaleString();
}

saleQuantity.addEventListener("input", function() {
    updateQuickSaleSummary();
});

const quickQuantityButtons =
    document.querySelectorAll(".cash-quantity-buttons button");

quickQuantityButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const quantity =
            Number(button.dataset.quantity);

        saleQuantity.value = quantity;

        // Remove selected state from all cash quantity buttons
        quickQuantityButtons.forEach(function(item) {
            item.classList.remove("selected");
        });

        // Highlight the button that was clicked
        button.classList.add("selected");

        updateQuickSaleSummary();
    });

});

saleQuantity.addEventListener("input", function() {

    const typedQuantity = Number(saleQuantity.value);

    quickQuantityButtons.forEach(function(button) {

        const buttonQuantity =
            Number(button.dataset.quantity);

        if (buttonQuantity === typedQuantity) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }

    });

});

recordQuickSale.addEventListener("click", function() {

    const quantity =
        Number(saleQuantity.value);

    if (!quantity || quantity < 1) {
        return;
    }

    createSale(
        selectedWaterSize,
        quantity
    );

    quickSaleModal.style.display = "none";
});

// Show saved sales when MajiTrack starts
updateSalesDisplay()
displayRecentSales();
displayCustomers();
updateCreditCustomerDropdown();
updateElectricityDisplay();
displayElectricityPurchases();
updateElectricityUsageDisplay();
displayElectricityUsageRecords();

// ==========================================
// MAJITRACK SERVICE WORKER REGISTRATION
// ==========================================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", function() {

        navigator.serviceWorker
            .register("./service-worker.js")
            .then(function(registration) {

                console.log(
                    "MajiTrack Service Worker registered successfully:",
                    registration.scope
                );

            })
            .catch(function(error) {

                console.error(
                    "MajiTrack Service Worker registration failed:",
                    error
                );

            });

    });

}